const { Sequelize } = require("sequelize");
const config = require("./config.js");

const sequelize = new Sequelize(config.development);

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
