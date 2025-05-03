import { NextResponse } from 'next/server';
import mongoose, { Schema, Connection, Model } from 'mongoose';

interface IDesign {
  userId: string;
  name: string;
  email: string;
  phone: string;
  bottleColor: string;
  capColor: string;
  labelText: string;
  textColor: string;
  fontSize: number;
  logoImage: string;
  bottleSize: string;
  createdAt: Date;
  status: string;
}

interface IContact {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  createdAt: Date;
  status: string;
}

interface IQuote {
  name: string;
  email: string;
  phone: string;
  company: string;
  bottleSize: string;
  quantity: number;
  customization: string[];
  designHelp: string;
  deadline: Date;
  additionalInfo: string;
  createdAt: Date;
  status: string;
}

// Initialize connection and models
let cachedConnection: Promise<Connection> | null = null;
let Design: Model<IDesign>;
let Contact: Model<IContact>;
let Quote: Model<IQuote>;

// Define schemas
const designSchema = new Schema<IDesign>({
  userId: String,
  name: String,
  email: String,
  phone: String,
  bottleColor: String,
  capColor: String,
  labelText: String,
  textColor: String,
  fontSize: Number,
  logoImage: String,
  bottleSize: String,
  createdAt: { type: Date, default: Date.now },
  status: String
});

const contactSchema = new Schema<IContact>({
  name: String,
  email: String,
  phone: String,
  company: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
  status: String
});

const quoteSchema = new Schema<IQuote>({
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
  createdAt: { type: Date, default: Date.now },
  status: String
});

// Connect to MongoDB and compile models
const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not defined');
    }

    if (!cachedConnection) {
      cachedConnection = mongoose.createConnection(process.env.MONGODB_URI).asPromise();
      const connection = await cachedConnection;
      
      Design = connection.model<IDesign>('Design', designSchema);
      Contact = connection.model<IContact>('Contact', contactSchema);
      Quote = connection.model<IQuote>('Quote', quoteSchema);
    }

    return await cachedConnection;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    cachedConnection = null; // Reset cached connection on error
    throw new Error('Failed to connect to database: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
};

export async function GET() {
  try {
    await connectDB();

    if (!Design || !Contact || !Quote) {
      throw new Error('Database models not initialized');
    }

    // Fetch counts
    const [designCount, contactCount, quoteCount] = await Promise.all([
      Design.countDocuments(),
      Contact.countDocuments(),
      Quote.countDocuments()
    ]);

    // Fetch recent designs
    const recentDesigns = await Design.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    // Fetch recent contacts
    const recentContacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    // Fetch recent quotes
    const recentQuotes = await Quote.find()
      .sort({ createdAt: -1 })
      .limit(5)
      .lean();

    return NextResponse.json({
      stats: {
        totalDesigns: designCount,
        totalContacts: contactCount,
        totalQuotes: quoteCount
      },
      recentData: {
        designs: recentDesigns,
        contacts: recentContacts,
        quotes: recentQuotes
      }
    });
  } catch (error) {
    console.error('Error fetching admin stats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch admin statistics' },
      { status: 500 }
    );
  }
}