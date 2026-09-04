import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pinecone.index(process.env.PINECONE_INDEX);

const storeResumeVectors = async ({
  vector,
  userId,
  resumeId,
}) => {
  try {
    const record = {
      id: `resume-${resumeId}`,
      values: vector,
      metadata: {
        type: "resume",
        userId: userId.toString(),
        resumeId: resumeId.toString(),
      },
    };

    await index.upsert({
      records: [record],
    });

    return true;
  } catch (error) {
    throw new Error(
      `Resume Pinecone upload failed: ${error.message}`
    );
  }
};

const storeJobVectors = async ({
  vector,
  jobId,
  title,
  company,
  description,
}) => {
  try {
    const record = {
      id: `job-${jobId}`,
      values: vector,
      metadata: {
        type: "job",
        jobId: jobId.toString(),
        title,
        company,
        description,
      },
    };

    await index.upsert({
      records: [record],
    });

    return true;
  } catch (error) {
    throw new Error(`Job Pinecone upload failed: ${error.message}`);
  }
};

const findMatchingJobs = async (resumeVector) => {
  try {
    const result = await index.query({
      vector: resumeVector,
      topK: 10,
      includeMetadata: true,
      filter: {
        type: { $eq: "job" },
      },
    });

    return result.matches;
  } catch (error) {
    throw new Error(`Job matching failed: ${error.message}`);
  }
};

export{
  storeResumeVectors,
  storeJobVectors,
  findMatchingJobs
};