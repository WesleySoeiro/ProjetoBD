"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("produtos", "preco_total", {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("produtos", "preco_total");
  },
};
