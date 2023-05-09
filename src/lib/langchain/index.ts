import Langchain from 'langchain';
import ChromaSDK from 'chroma-sdk';

// Initialize Langchain and Chroma DB instances
const langchain = new Langchain();
const chroma = new ChromaSDK(/* Your Chroma DB credentials */);

// Embed the static text file and store in Chroma DB
export const embedText = async (text: string) => {
  const embedding = await langchain.embedText(text);
  await chroma.storeEmbedding(embedding);
};

// Query the embedding using the Langchain API
export const queryEmbedding = async (question: string) => {
  const queryResult = await langchain.query(question);
  return queryResult;
};