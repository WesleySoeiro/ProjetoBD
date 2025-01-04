"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("cargos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        unique: true,
        get() {
          const value = this.getDataValue("nome");
          return value ? value.toLowerCase() : value;
        },
      },
      salario: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("cargos");
  },
};
