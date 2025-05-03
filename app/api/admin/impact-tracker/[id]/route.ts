import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { title, description, value, category } = body;

    const { data, error } = await supabase
      .from('impact_tracker')
      .update({
        title,
        description,
        value,
        category,
        updated_at: new Date().toISOString(),
      })
      .eq('id', params.id)
      .select();

    if (error) throw error;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('Error updating impact item:', error);
    return NextResponse.json(
      { error: 'Failed to update impact item' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { error } = await supabase
      .from('impact_tracker')
      .delete()
      .eq('id', params.id);

    if (error) throw error;

    return NextResponse.json({ message: 'Impact item deleted successfully' });
  } catch (error) {
    console.error('Error deleting impact item:', error);
    return NextResponse.json(
      { error: 'Failed to delete impact item' },
      { status: 500 }
    );
  }
} 