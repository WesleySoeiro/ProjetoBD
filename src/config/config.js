const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  logging: false,
});

async function dbConnect() {
  try {
    await sequelize.authenticate();
    return sequelize;
  } catch (error) {
    console.log("Unable to connect to the database");
    throw error;
  }
}

module.exports = dbConnect;
