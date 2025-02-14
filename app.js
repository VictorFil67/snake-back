import express from "express";
import scoresRouter from "./routes/scoresRouter.js";
import cors from "cors";
import "dotenv/config";

const { PORT = 5000 } = process.env;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", scoresRouter);

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
