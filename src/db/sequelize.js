require("dotenv").config();
const Sequelize = require("sequelize");
const pg = require("pg");

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
  dialect: pg,
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

export default sequelize;
