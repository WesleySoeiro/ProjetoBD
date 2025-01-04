"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn("vendas", "subtotal");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn("vendas", "subtotal", {
      type: Sequelize.FLOAT,
      allowNull: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
};
