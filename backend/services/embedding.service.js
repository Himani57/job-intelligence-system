import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const embeddings = new GoogleGenerativeAIEmbeddings({
  model: "gemini-embedding-001",
  apiKey: process.env.GEMINI_API_KEY,
});

const createSingleEmbedding = async (text) => {
  try {
    if (!text || !text.trim()) {
      throw new Error("Text is required for embedding");
    }

    const vector = await embeddings.embedQuery(text);

    console.log("Text length:", text.length);
    console.log("Vector dimension:", vector.length);

    return vector;
  } catch (error) {
    throw new Error(`Embedding creation failed: ${error.message}`);
  }
};

export { createSingleEmbedding };