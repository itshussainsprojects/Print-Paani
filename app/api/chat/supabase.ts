import { createClient } from '@supabase/supabase-js'
import { getEmbedding } from './embeddings'

if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
  throw new Error('Required environment variables are not set')
}

// Initialize Supabase client
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_ANON_KEY
)

// Re-export getEmbedding from embeddings.ts
export { getEmbedding }

// Function to perform similarity search
export async function similaritySearch(query: string, topK: number = 3) {
  try {
    const embedding = await getEmbedding(query)
    
    const { data: chunks, error } = await supabase.rpc('match_documents', {
      query_embedding: embedding,
      match_threshold: 0.5,
      match_count: topK
    })

    if (error) throw error
    
    return chunks.map((chunk: any) => chunk.content).join('\n\n')
  } catch (error) {
    console.error('Error in similarity search:', error)
    return ''
  }
}