// import { NextResponse } from 'next/server';
// import mongoose from 'mongoose';

// // Define the Quote schema
// const quoteSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   company: String,
//   bottleSize: String,
//   quantity: Number,
//   customization: [String],
//   designHelp: String,
//   deadline: Date,
//   additionalInfo: String,
//   status: {
//     type: String,
//     enum: ['pending', 'approved', 'completed', 'rejected'],
//     default: 'pending'
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// // Define the Order schema
// const orderSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   company: String,
//   bottleSize: String,
//   quantity: Number,
//   quoteId: String,
//   orderId: {
//     type: String,
//     default: () => Math.random().toString(36).substr(2, 9).toUpperCase()
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'processing', 'shipped', 'delivered'],
//     default: 'pending'
//   },
//   createdAt: { type: Date, default: Date.now }
// });

// // Create the models
// const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);
// const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);

// // Connect to MongoDB
// const connectDB = async () => {
//   if (!process.env.MONGODB_URI) {
//     throw new Error('MONGODB_URI environment variable is not defined');
//   }

//   if (mongoose.connections[0].readyState) {
//     return;
//   }

//   try {
//     await mongoose.connect(process.env.MONGODB_URI);
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     throw new Error('Failed to connect to database');
//   }
// };

// export async function PUT(request: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const updatedData = await request.json();
    
//     const quote = await Quote.findByIdAndUpdate(
//       params.id,
//       updatedData,
//       { new: true }
//     );

//     if (!quote) {
//       return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
//     }

//     // If there's an associated order, update it as well
//     if (quote.status === 'approved') {
//       await Order.findOneAndUpdate(
//         { quoteId: params.id },
//         {
//           name: quote.name,
//           email: quote.email,
//           company: quote.company,
//           bottleSize: quote.bottleSize,
//           quantity: quote.quantity
//         }
//       );
//     }

//     return NextResponse.json(quote);
//   } catch (error) {
//     console.error('Error updating quote:', error);
//     return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 });
//   }
// }

// export async function PATCH(request: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const { status } = await request.json();

//     const quote = await Quote.findById(params.id);
//     if (!quote) {
//       return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
//     }

//     quote.status = status;
//     await quote.save();

//     // If quote is approved, create an order
//     if (status === 'approved') {
//       const order = new Order({
//         name: quote.name,
//         email: quote.email,
//         company: quote.company,
//         bottleSize: quote.bottleSize,
//         quantity: quote.quantity,
//         quoteId: quote._id,
//         status: 'pending'
//       });
//       await order.save();
//     }

//     return NextResponse.json(quote);
//   } catch (error) {
//     console.error('Error updating quote status:', error);
//     return NextResponse.json({ error: 'Failed to update quote status' }, { status: 500 });
//   }
// }

// export async function DELETE(request: Request, { params }: { params: { id: string } }) {
//   try {
//     await connectDB();
//     const quote = await Quote.findByIdAndDelete(params.id);

//     if (!quote) {
//       return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
//     }

//     // Delete associated order if it exists
//     await Order.findOneAndDelete({ quoteId: params.id });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Error deleting quote:', error);
//     return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 });
//   }
// }
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

// Create the models
const Quote = mongoose.models.Quote || mongoose.model('Quote', quoteSchema);
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

export async function PUT(request: Request, context: { params: { id: string } }) {
  try {
    const { params } = context;
    await connectDB();
    const updatedData = await request.json();
    
    const quote = await Quote.findByIdAndUpdate(params.id, updatedData, { new: true });

    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }

    // If quote is approved, update existing order
    if (quote.status === 'approved') {
      await Order.findOneAndUpdate(
        { quoteId: params.id },
        {
          name: quote.name,
          email: quote.email,
          company: quote.company,
          bottleSize: quote.bottleSize,
          quantity: quote.quantity
        }
      );
    }

    return NextResponse.json(quote);
  } catch (error) {
    console.error('Error updating quote:', error);
    return NextResponse.json({ error: 'Failed to update quote' }, { status: 500 });
  }
}

export async function PATCH(request: Request, context: { params: { id: string } }) {
  try {
    const { params } = context;
    await connectDB();
    const { status } = await request.json();

    const quote = await Quote.findById(params.id);
    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }

    quote.status = status;
    await quote.save();

    // If quote is approved, create an order
    if (status === 'approved') {
      const order = new Order({
        name: quote.name,
        email: quote.email,
        company: quote.company,
        bottleSize: quote.bottleSize,
        quantity: quote.quantity,
        quoteId: quote._id,
        status: 'pending'
      });
      await order.save();
    }

    return NextResponse.json(quote);
  } catch (error) {
    console.error('Error updating quote status:', error);
    return NextResponse.json({ error: 'Failed to update quote status' }, { status: 500 });
  }
}

export async function DELETE(request: Request, context: { params: { id: string } }) {
  try {
    const { params } = context;
    await connectDB();
    const quote = await Quote.findByIdAndDelete(params.id);

    if (!quote) {
      return NextResponse.json({ error: 'Quote not found' }, { status: 404 });
    }

    // Delete associated order if it exists
    await Order.findOneAndDelete({ quoteId: params.id });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting quote:', error);
    return NextResponse.json({ error: 'Failed to delete quote' }, { status: 500 });
  }
}
