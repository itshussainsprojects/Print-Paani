import { readFileSync } from 'fs'
import { createClient } from '@supabase/supabase-js'
import { getEmbedding } from '../app/api/chat/embeddings'
import path from 'path'

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
)

// Function to chunk text into smaller pieces
function chunkText(text: string, maxLength = 500): string[] {
  const chunks: string[] = []
  let currentChunk = ''

  text.split('\n').forEach(line => {
    if ((currentChunk + line).length <= maxLength) {
      currentChunk += (currentChunk ? '\n' : '') + line
    } else {
      if (currentChunk) chunks.push(currentChunk)
      currentChunk = line
    }
  })

  if (currentChunk) chunks.push(currentChunk)
  return chunks
}

async function main() {
  try {
    // Read knowledge base file
    const knowledgeBasePath = path.join(process.cwd(), 'data', 'printpaani_knowledge.txt')
    const content = readFileSync(knowledgeBasePath, 'utf-8')
    
    // Split into chunks
    const chunks = chunkText(content)
    console.log(`Split content into ${chunks.length} chunks`)

    // Clear existing documents
    await supabase.from('documents').delete().neq('id', 0)
    console.log('Cleared existing documents')

    // Process each chunk with delay to avoid rate limits
    for (const [index, chunk] of chunks.entries()) {
      const embedding = await getEmbedding(chunk)
      
      await supabase.from('documents').insert({
        content: chunk,
        embedding
      })

      console.log(`Processed chunk ${index + 1}/${chunks.length}`)
      
      // Add a small delay between chunks
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log('Successfully populated embeddings')
  } catch (error) {
    console.error('Error populating embeddings:', error)
    process.exit(1)
  }
}

main()