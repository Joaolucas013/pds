'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('veiculos', {

      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      placa: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique:true
      },
      chassi: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      
      tipo: {
        type: Sequelize.STRING
      },
      cor: {
        type: Sequelize.STRING
      },
      situacao: {
        type: Sequelize.BOOLEAN
      },
      quilometragem: {
        type: Sequelize.DECIMAL
      },
      ano_fabricacao: {
        type: Sequelize.DATEONLY
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('veiculos');
  }
};