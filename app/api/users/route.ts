import { NextResponse } from 'next/server';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export async function GET() {
  try {
    const db = getFirestore();
    const usersSnapshot = await getDocs(collection(db, 'users'));
    
    const users = usersSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = getFirestore();
    
    // Add validation and user creation logic here
    
    return NextResponse.json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}