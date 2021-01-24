import Sequelize from "sequelize";
import sequelize from "../config/database_connect.js";

const SalesRecords = sequelize.define("salesRecords", {
  region: {
    type: Sequelize.STRING,
  },
  country: {
    type: Sequelize.STRING,
  },
  item_type: {
    type: Sequelize.STRING,
  },
  sales_channel: {
    type: Sequelize.STRING,
  },
  order_priority: {
    type: Sequelize.STRING,
  },
  order_date: {
    type: Sequelize.STRING,
  },
  order_id: {
    type: Sequelize.STRING,
  },
  ship_date: {
    type: Sequelize.STRING,
  },
  units_sold: {
    type: Sequelize.STRING,
  },
  unit_price: {
    type: Sequelize.STRING,
  },
  unit_cost: {
    type: Sequelize.STRING,
  },
  travel_revenue: {
    type: Sequelize.STRING,
  },
  total_cost: {
    type: Sequelize.STRING,
  },
  total_profit: {
    type: Sequelize.STRING,
  },
});

export default SalesRecords;
