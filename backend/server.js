import express from "express";
import multer from "multer";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import mongoose from "mongoose";
import Image from "./models/Image.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

  mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ storage: multer.memoryStorage() });

// Upload image to Cloudinary
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const uploadFromBuffer = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "school-gallery" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadFromBuffer();

    // const imageData = {
    //   url: result.secure_url,
    //   public_id: result.public_id,
    // };

    // imageStore.push(imageData);

    // res.json({
    //   message: "Upload successful",
    //   image: imageData,
    // });

    const savedImage = await Image.create({
      url: result.secure_url,
      public_id: result.public_id,
    });

    res.json({ message: "Upload successful", image: savedImage });

  } catch (err) {
    console.error("Upload error:", err);
    res.status(500).json({ error: "Upload failed" });
  }
});

// Get all images

// let imageStore = [];

// app.get("/images", (req, res) => {
//   res.json({ images: imageStore });
// });

// Get all images
app.get("/images", async (req, res) => {
  const images = await Image.find().sort({ createdAt: 1 });
  res.json({ images });
});

// Delete image
// app.delete("/images/:public_id", async (req, res) => {
//   try {
//     const { public_id } = req.params;
//     await cloudinary.uploader.destroy(public_id);
//     imageStore = imageStore.filter((img) => img.public_id !== public_id);
//     res.json({ message: "Deleted successfully" });
//   } catch (err) {
//     console.error("Delete error:", err);
//     res.status(500).json({ error: "Delete failed" });
//   }
// });

// Delete image
app.delete("/images/:id", async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ error: "Not found" });

    await cloudinary.uploader.destroy(image.public_id);
    await image.deleteOne();

    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

const HOMEPAGE_FILE = "./homepage.json";

// GET homepage data
app.get("/homepage", (req, res) => {
  if (!fs.existsSync(HOMEPAGE_FILE)) {
    fs.writeFileSync(
      HOMEPAGE_FILE,
      JSON.stringify({ updates: [], notices: [] }, null, 2)
    );
  }
  const data = JSON.parse(fs.readFileSync(HOMEPAGE_FILE, "utf-8"));
  res.json(data);
});

// UPDATE homepage section
app.post("/homepage/update", (req, res) => {
  const { section, items } = req.body;
  if (!section || !Array.isArray(items)) {
    return res.status(400).json({ error: "Invalid payload" });
  }
  const data = JSON.parse(fs.readFileSync(HOMEPAGE_FILE, "utf-8"));
  data[section] = items;
  fs.writeFileSync(HOMEPAGE_FILE, JSON.stringify(data, null, 2));
  res.json({ success: true });
});

app.listen(process.env.PORT, () => console.log("Server running on port"));
