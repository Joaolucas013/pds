'use strict';
const { Types } = require('mysql2');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Setor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Setor.init({
    nome: {
      type: DataTypes.STRING
    } ,

    id: {
 type: DataTypes.TINYINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    }
  }, {
    sequelize,
    modelName: 'Setor',
    tableName: 'setores',
   timestamps: false
  });
  return Setor;
};