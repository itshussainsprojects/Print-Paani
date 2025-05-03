-- Enable pgvector extension
create extension if not exists vector;

-- Create documents table with vector support
create table if not exists documents (
  id bigint primary key generated always as identity,
  content text not null,
  embedding vector(384) not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create function for similarity search
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
    1 - (documents.embedding <=> query_embedding) as similarity
  from documents
  where 1 - (documents.embedding <=> query_embedding) > match_threshold
  order by similarity desc
  limit match_count;
end;
$$;