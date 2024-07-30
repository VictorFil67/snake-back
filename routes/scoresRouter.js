import express from "express";
import scoresControllers from "../controlers/scoresControllers.js";

const scoresRouter = express.Router();
const { addScore, getRecords } = scoresControllers;

scoresRouter.post("/score", addScore);
scoresRouter.get("/records", getRecords);

export default scoresRouter;
