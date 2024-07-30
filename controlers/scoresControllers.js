import pool from "../db.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";
// import { setScore } from "../services/scoresServices.js";

const addScore = async (req, res) => {
  const { name, points } = req.body;
  const newScore = await pool.query(
    `INSERT INTO scores (name, points) VALUES ($1, $2) RETURNING *`,
    [name, points]
  );
  console.log(newScore.rows[0]);
  res.json(newScore.rows[0]);
};

const getRecords = async (req, res) => {
  const records = await pool.query(
    `SELECT name, points FROM scores ORDER BY points DESC LIMIT 5`
  );
  res.json(records.rows);
};

export default {
  addScore: ctrlWrapper(addScore),
  getRecords: ctrlWrapper(getRecords),
};
