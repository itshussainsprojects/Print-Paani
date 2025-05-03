import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Check for required environment variables
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is not defined');
}

if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY is not defined');
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

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
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch impact data' },
        { status: 500 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching impact data:', error);
    return NextResponse.json(
      { error: 'Failed to fetch impact data' },
      { status: 500 }
    );
  }
}

export async function POST() {
  try {
    const { data, error } = await supabase
      .from('impact_tracker')
      .insert([
        {
          user_bottles: 0,
          total_bottles: 0,
          impact_history: []
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to create impact tracker' },
        { status: 500 }
      );
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Error creating impact tracker:', error);
    return NextResponse.json(
      { error: 'Failed to create impact tracker' },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    const { user_bottles, total_bottles, impact_history } = body;

    const { data: currentData, error: fetchError } = await supabase
      .from('impact_tracker')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1);

    if (fetchError) {
      console.error('Supabase error:', fetchError);
      return NextResponse.json(
        { error: 'Failed to fetch current data' },
        { status: 500 }
      );
    }

    if (!currentData || currentData.length === 0) {
      const { data: newData, error: createError } = await supabase
        .from('impact_tracker')
        .insert([
          {
            user_bottles: user_bottles || 0,
            total_bottles: total_bottles || 0,
            impact_history: impact_history || []
          }
        ])
        .select();

      if (createError) {
        console.error('Supabase error:', createError);
        return NextResponse.json(
          { error: 'Failed to create new data' },
          { status: 500 }
        );
      }

      return NextResponse.json(newData[0]);
    }

    const { data: updatedData, error: updateError } = await supabase
      .from('impact_tracker')
      .update({
        user_bottles: user_bottles !== undefined ? user_bottles : currentData[0].user_bottles,
        total_bottles: total_bottles !== undefined ? total_bottles : currentData[0].total_bottles,
        impact_history: impact_history !== undefined ? impact_history : currentData[0].impact_history,
        updated_at: new Date().toISOString()
      })
      .eq('id', currentData[0].id)
      .select();

    if (updateError) {
      console.error('Supabase error:', updateError);
      return NextResponse.json(
        { error: 'Failed to update data' },
        { status: 500 }
      );
    }

    return NextResponse.json(updatedData[0]);
  } catch (error) {
    console.error('Error updating impact tracker:', error);
    return NextResponse.json(
      { error: 'Failed to update impact tracker' },
      { status: 500 }
    );
  }
} 