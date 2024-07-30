const addScore = async (req, res) => {
  const { name, points } = req.body;
  console.log(name, points);
  res.json("ok");
};

const getRecords = async (req, res) => {};

export default { addScore, getRecords };
