"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "produtos",
      [
        {
          nome: "Notebook",
          fabricante: "Dell",
          valor: 8000,
          data_entrada: "2024-12-14",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Smartphone",
          fabricante: "Samsung",
          valor: 3500,
          data_entrada: "2024-12-10",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Monitor",
          fabricante: "LG",
          valor: 1200,
          data_entrada: "2024-12-12",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Teclado Mecânico",
          fabricante: "Razer",
          valor: 450,
          data_entrada: "2024-12-08",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nome: "Fone de Ouvido Bluetooth",
          fabricante: "Sony",
          valor: 750,
          data_entrada: "2024-12-05",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("produtos", null, {});
  },
};
