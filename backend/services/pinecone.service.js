import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pinecone.index(process.env.PINECONE_INDEX);

const storeResumeVectors = async ({
  chunks,
  vectors,
  userId,
  resumeId,
}) => {
  try {
    const records = chunks.map((chunk, index) => ({
      id: `${resumeId}-${index}`,
      values: vectors[index],
      metadata: {
        userId: userId.toString(),
        resumeId: resumeId.toString(),
        text: chunk,
      },
    }));

    console.log("About to upsert, records length:", records.length);
    await index.upsert({records});

    return {
      success: true,
      count: records.length,
    };
  } catch (error) {
  console.error("FULL ERROR:", error);
  throw new Error(`Pinecone upload failed: ${error.message}`);
}
};

export default storeResumeVectors;