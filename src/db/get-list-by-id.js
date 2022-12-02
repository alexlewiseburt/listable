import sequelize from "./sequelize";

const getListById = async (id) => {
  if (isNaN(Number(id))) {
    throw new Error("List not found");
  }

  const lists = (
    await sequelize.query(`select * from lists where id = ${id} limit 1;`)
  )[0];

  if (lists.length === 0) {
    throw new Error("List not found");
  }

  const list = lists[0];

  const items = (
    await sequelize.query(`select * from items where list_id = ${id};`)
  )[0];

  return {
    ...list,
    items: items.map((item) => ({ ...item, list_id: undefined })),
  };
};

export default getListById;
