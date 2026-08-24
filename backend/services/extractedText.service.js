import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import fs from "fs";
import path from "path";
import os from "os";

const extractResumeText = async (resumeUrl) => {
  const response = await fetch(resumeUrl);

  if (!response.ok) {
    throw new Error("Failed to download resume");
  }

  const buffer = Buffer.from(await response.arrayBuffer());

  const tempFilePath = path.join(
    os.tmpdir(),
    `resume-${Date.now()}.pdf`
  );

  fs.writeFileSync(tempFilePath, buffer);

  try {
    const loader = new PDFLoader(tempFilePath);

    const documents = await loader.load();

    const extractedText = documents
      .map((doc) => doc.pageContent)
      .join("\n");

    return extractedText;
  } finally {
    fs.unlinkSync(tempFilePath);
  }
};

export default extractResumeText;