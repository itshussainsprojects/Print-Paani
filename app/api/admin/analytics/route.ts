import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { startOfWeek, startOfMonth, startOfYear, endOfDay } from 'date-fns';

// Define the Quote schema
const quoteSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  bottleSize: String,
  quantity: Number,
  customization: [String],
  designHelp: String,
  deadline: Date,
  additionalInfo: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'completed', 'rejected'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

// Create the models
const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);

// Connect to MongoDB
const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI environment variable is not defined');
  }

  if (mongoose.connections[0].readyState) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    throw new Error('Failed to connect to database');
  }
};

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const timeRange = searchParams.get('timeRange') || 'month';

    // Get the start date based on the time range
    const now = new Date();
    let startDate;
    switch (timeRange) {
      case 'week':
        startDate = startOfWeek(now);
        break;
      case 'year':
        startDate = startOfYear(now);
        break;
      case 'month':
      default:
        startDate = startOfMonth(now);
    }

    const Order = mongoose.models.Order || mongoose.model('Order');

    // Get basic statistics
    const [totalOrders, completedOrders, pendingOrders] = await Promise.all([
      Order.countDocuments({ createdAt: { $gte: startDate, $lte: endOfDay(now) } }),
      Order.countDocuments({ 
        status: 'delivered',
        createdAt: { $gte: startDate, $lte: endOfDay(now) }
      }),
      Order.countDocuments({ 
        status: 'pending',
        createdAt: { $gte: startDate, $lte: endOfDay(now) }
      })
    ]);

    // Calculate total bottles
    const orders = await Order.find({
      createdAt: { $gte: startDate, $lte: endOfDay(now) }
    });
    const totalBottles = orders.reduce((sum, order) => sum + (order.quantity || 0), 0);

    // Get orders by date
    const ordersByMonth = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: endOfDay(now) }
        }
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          orders: { $sum: 1 }
        }
      },
      {
        $sort: { _id: 1 }
      },
      {
        $project: {
          date: '$_id',
          orders: 1,
          _id: 0
        }
      }
    ]);

    // Get bottles by size distribution
    const bottlesBySize = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lte: endOfDay(now) }
        }
      },
      {
        $group: {
          _id: '$bottleSize',
          count: { $sum: '$quantity' }
        }
      },
      {
        $project: {
          size: '$_id',
          count: 1,
          _id: 0
        }
      }
    ]);

    // Get recent orders
    const recentOrders = await Order.find()
      .sort({ createdAt: -1 })
      .limit(10)
      .select('orderId status quantity bottleSize createdAt');

    return NextResponse.json({
      totalOrders,
      completedOrders,
      pendingOrders,
      totalBottles,
      ordersByMonth,
      bottlesBySize,
      recentOrders
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { error: 'Failed to fetch analytics' },
      { status: 500 }
    );
  }
}