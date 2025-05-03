import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define the Order schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  bottleSize: String,
  quantity: Number,
  quoteId: String,
  orderId: {
    type: String,
    default: () => Math.random().toString(36).substr(2, 9).toUpperCase()
  },
  status: {
    type: String,
    enum: ['pending', 'processing', 'shipped', 'delivered'],
    default: 'pending'
  },
  createdAt: { type: Date, default: Date.now }
});

// Create the model
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

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

export async function GET() {
  try {
    await connectDB();
    const orders = await Order.find().sort({ createdAt: -1 });
    
    // Fetch associated quote details for each order
    const ordersWithQuoteDetails = await Promise.all(
      orders.map(async (order) => {
        const QuoteModel = mongoose.models.Quote || mongoose.model('Quote');
        const quote = await QuoteModel.findById(order.quoteId);
        return {
          ...order.toObject(),
          quoteDetails: quote ? {
            customization: quote.customization,
            designHelp: quote.designHelp,
            deadline: quote.deadline,
            additionalInfo: quote.additionalInfo,
            phone: quote.phone
          } : null
        };
      })
    );
    
    return NextResponse.json(ordersWithQuoteDetails);
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const orderData = await request.json();
    const order = new Order(orderData);
    await order.save();
    return NextResponse.json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}