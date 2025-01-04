"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("vendas", "id_produto", {
      type: Sequelize.INTEGER,
      allowNull: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });

    await queryInterface.addColumn("vendas", "quantidade_vendida", {
      type: Sequelize.INTEGER,
      allowNull: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.addColumn("vendas", "subtotal", {
      type: Sequelize.FLOAT,
      allowNull: true,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
    await queryInterface.removeColumn("vendas", "total_vendas");
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("vendas", "id_produto");
    await queryInterface.removeColumn("vendas", "quantidade_vendida");
    await queryInterface.removeColumn("vendas", "subtotal");

    await queryInterface.addColumn("vendas", "total_vendas", {
      type: Sequelize.FLOAT,
      allowNull: false,
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    });
  },
};
