'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
      type: DataTypes.STRING,
      allowNull: false,

    },

    cpf: {
      type: DataTypes.STRING,
      unique:true,
      allowNull: false
    },

    situacao:{
      type:  DataTypes.BOOLEAN,
    },

    data_admissao: {
      type: DataTypes.DATEONLY,
    },

    data_demissao: {
      type:  DataTypes.DATEONLY
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
    await queryInterface.dropTable('funcionarios');
  }
};