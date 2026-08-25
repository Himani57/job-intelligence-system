import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001",
  apiKey: process.env.GEMINI_API_KEY,
});

const createEmbeddings = async (text) => {
  try {
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const chunks = await splitter.splitText(text);

    const vectors = await embeddings.embedDocuments(chunks);

    console.log("Extracted text length:", text.length);
    console.log("Chunks:", chunks.length);
    console.log("Vectors:", vectors.length);

    return {
      chunks,
      vectors,
    };
  } catch (error) {
    throw new Error(`Embedding creation failed: ${error.message}`);
  }
};

export default createEmbeddings;