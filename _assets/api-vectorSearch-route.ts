import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MongoDBAtlasVectorSearch } from "langchain/vectorstores/mongodb_atlas";
import mongoClientPromise from '@/app/lib/mongodb';

import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parse text bodies as text
app.use(bodyParser.text());

//export async function POST(req: Request) {
export async function POST(req: express.Request, res: express.Response) {
  const client = await mongoClientPromise;
  const dbName = "docs";
  const collectionName = "embeddings";
  const collection = client.db(dbName).collection(collectionName);
  
  const question = await req.body;

  const vectorStore = new MongoDBAtlasVectorSearch(
    new OpenAIEmbeddings({
      modelName: 'text-embedding-ada-002',
      stripNewLines: true,
    }), {
    collection,
    indexName: "default",
    textKey: "text", 
    embeddingKey: "embedding",
  });

  const retriever = vectorStore.asRetriever({
    searchType: "mmr",
    searchKwargs: {
      fetchK: 20,
      lambda: 0.1,
    },
  });
  
  const retrieverOutput = await retriever.getRelevantDocuments(question);

  console.log(retrieverOutput);
  
  //return Response.json(retrieverOutput);
  //return res.json(retrieverOutput);
  return new Response(JSON.stringify(retrieverOutput), {
    headers: { 'Content-Type': 'application/json' },
  });
}

