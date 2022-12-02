import getListById from "../../../src/db/get-list-by-id";

const getHandler = async (req, res) => {
  const id = req.query.id;

  try {
    const list = await getListById(id);
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handler = (req, res) => {
  console.log();
  if (req.method === "GET") {
    return getHandler(req, res);
  }

  res.status(400).json({ error: "Unhandled method." });
};

export default handler;
