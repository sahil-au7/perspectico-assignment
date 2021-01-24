import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "test",
  process.env.USER,
  process.env.PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    port: 51938,
    logging: false,

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

export default sequelize;
