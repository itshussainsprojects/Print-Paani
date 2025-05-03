import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define the Order schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  bottleSize: String,
  quantity: Number,
  price: Number,
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

export async function PATCH(request: Request, context: { params: { id: string } }) {
  try {
    const { params } = context;
    await connectDB();
    const { status } = await request.json();

    const order = await Order.findByIdAndUpdate(
      params.id,
      { status },
      { new: true }
    );

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { error: 'Failed to update order' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
  try {
    const { params } = context;
    await connectDB();
    
    const order = await Order.findByIdAndDelete(params.id);

    if (!order) {
      return NextResponse.json({ error: 'Order not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting order:', error);
    return NextResponse.json(
      { error: 'Failed to delete order' },
      { status: 500 }
    );
  }
} 