'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Funcionario.init({
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
    }
  }, {
    sequelize,
    modelName: 'Funcionario',
    tableName: 'funcionarios',
    timestamps: false
  });
  return Funcionario;
};