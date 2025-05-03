import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Check for required environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
}

if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('impact_tracker')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch impact data' },
        { status: 500 }
      );
    }

    // If no data exists, return default values
    if (!data || data.length === 0) {
      return NextResponse.json({
        user_bottles: 0,
        total_bottles: 0,
        impact_history: []
      });
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Error fetching impact data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch impact data' },
      { status: 500 }
    );
  }
} 