import express from "express";
import scoresRouter from "./routes/scoresRouter.js";

const { PORT = 3000 } = process.env;

const app = express();
app.use(express.json());

app.use("/api", scoresRouter);

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
