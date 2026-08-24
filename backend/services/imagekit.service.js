import ImageKit from "@imagekit/nodejs";

const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

const uploadFile = async (file) => {
  try {
    const uploadResult = await imageKit.files.upload({
      file: file.buffer.toString('base64'),
      fileName: file.originalname,
    });

    return uploadResult;
  } catch (err) {
    console.log("Error: ", err);
    return res.status(500).json({ 
        message: "File upload failed", error: err.message 
    });
  }
};

export default uploadFile;
