import sequelize from "../../src/db/sequelize";

const postHandler = (req, res) =>
  sequelize
    .query(
      `
        drop table if exists items;
        drop table if exists lists;

          create table lists (
              id serial primary key, 
              name text,
              type text,
              date integer,
              location text
          );

          create table items (
              id serial primary key, 
              name text,
              link text,
              price float,
              list_id integer not null references lists(id)
          );
        `
    )
    .then(() => {
      console.log("DB seeded!");
      res.sendStatus(200);
    })
    .catch((error) => res.status(400).json({ error: error.message }));

const handler = (req, res) => {
  if (req.method === "POST") {
    return postHandler(req, res);
  }

  res.status(400).json({ error: "Unhandled method." });
};

export default handler;
