import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

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

// Create the Quote model
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

export async function GET() {
  try {
    await connectDB();
    const quotes = await Quote.find().sort({ createdAt: -1 });
    return NextResponse.json(quotes);
  } catch (error) {
    console.error('Error fetching quotes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch quotes' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    await connectDB();
    const body = await request.json();
    const quote = new Quote(body);
    await quote.save();
    return NextResponse.json(quote);
  } catch (error) {
    console.error('Error creating quote:', error);
    return NextResponse.json(
      { error: 'Failed to create quote' },
      { status: 500 }
    );
  }
} 