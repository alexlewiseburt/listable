import getListById from "../../../src/db/get-list-by-id";
import sequelize from "../../../src/db/sequelize";

const getHandler = (req, res) => {
  return sequelize
    .query("select * from lists order by id desc;")
    .then((dbRes) => {
      res.status(200).send(dbRes[0]);
    });
};

const postHandler = async (req, res) => {
  const { name, date, type, location, items } = req.body;

  const list = (
    await sequelize.query(
      `insert into lists (name, date, type, location)
                            values ('${name.replace(
                              new RegExp("'", "g"),
                              "''"
                            )}', ${date}, '${type}', '${location}')
                            returning id;`
    )
  )[0][0];

  const listId = list.id;

  const values = items
    .map((item) => `('${item.name}', '${item.link}', ${item.price}, ${listId})`)
    .join(", ");
  await sequelize.query(
    `insert into items (name, link, price, list_id)
                          values ${values};`
  );

  const fetchedList = await getListById(listId);
  res.status(200).json(fetchedList);
};

const handler = (req, res) => {
  if (req.method === "GET") {
    return getHandler(req, res);
  }

  if (req.method === "POST") {
    return postHandler(req, res);
  }

  res.status(400).json({ error: "Unhandled method." });
};

export default handler;
