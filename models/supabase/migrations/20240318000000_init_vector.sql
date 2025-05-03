-- Enable the pgvector extension to work with embedding vectors
create extension if not exists vector;

-- Create a table to store document chunks and their embeddings
create table if not exists documents (
  id bigserial primary key,
  content text not null,
  embedding vector(384) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create a function to search for similar documents
create or replace function match_documents (
  query_embedding vector(384),
  match_threshold float,
  match_count int
)
returns table (
  id bigint,
  content text,
  similarity float
)
language plpgsql
as $$
begin
  return query
  select
    id,
    content,
    1 - (embedding <=> query_embedding) as similarity
  from documents
  where 1 - (embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
end;
$$;

-- Create an index for faster similarity searches
create index on documents
using ivfflat (embedding vector_cosine_ops)
with (lists = 100);