import { setScore } from "../services/scoresServices.js";

const addScore = async (req, res) => {
  const { name, points } = req.body;
  const newScore = setScore({ name, points });
  console.log(newScore);
  return res.json(newScore);
};

const getRecords = async (req, res) => {};

export default { addScore, getRecords };
