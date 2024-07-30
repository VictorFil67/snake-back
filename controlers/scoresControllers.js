import pool from "../db.js";
// import { setScore } from "../services/scoresServices.js";

const addScore = async (req, res) => {
  const { name, points } = req.body;
  const newScore = await pool.query(
    `INSERT INTO scores (name, points) VALUES ($1, $2) RETURNING *`,
    [name, points]
  );
  //   setScore({ name, points });
  console.log(newScore);
  //   return
  res.json(newScore);
};

const getRecords = async (req, res) => {};

export default { addScore, getRecords };
