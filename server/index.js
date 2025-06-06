import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Needed to resolve __dirname with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// POST endpoint to check password and download CV
app.post("/api/download", (req, res) => {
  const { password } = req.body;

  if (password !== process.env.CV_PASSWORD) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const filePath = path.join(__dirname, "cv.pdf");

  res.download(filePath, "cv.pdf", (err) => {
    if (err) {
      console.error("Download error:", err);
      if (!res.headersSent) {
        res.status(500).json({ error: "Failed to download file." });
      }
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
