import express from "express";

const { PORT = 3000 } = process.env;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello! Hello! Hello! Hello!");
});

app.listen(PORT, () => {
  console.log(`Server is running. Use our API on port: ${PORT}`);
});
