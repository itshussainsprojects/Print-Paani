import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Define the User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  company: String,
  quoteId: String,
  createdAt: { type: Date, default: Date.now }
});

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
const User = mongoose.models.User || mongoose.model('User', userSchema);
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
    
    // Fetch users with their associated quotes
    const users = await User.find().sort({ createdAt: -1 });
    const usersWithQuotes = await Promise.all(
      users.map(async (user) => {
        const quote = await Quote.findOne({ _id: user.quoteId });
        return {
          ...user.toObject(),
          quote: quote ? quote.toObject() : null
        };
      })
    );

    return NextResponse.json(usersWithQuotes);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();
    const user = await User.findByIdAndDelete(params.id);

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
} 