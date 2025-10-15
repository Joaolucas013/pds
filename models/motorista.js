'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Motorista extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Motorista.init({
    cpf:{
      type: DataTypes.STRING,
      unique: true, 
      allowNull: false
    }, 
      id_motorista: {
 type: DataTypes.TINYINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
   cnh:{ 
    type: DataTypes.STRING,
    allowNull: false, 
    unique: true,
    allowNull: false
  },
    nome: {
type: DataTypes.STRING,
allowNull: false
    }, 

    data_admissao:{
type: DataTypes.DATE,
allowNull: false
    },

    situacao:  {
 type: DataTypes.BOOLEAN,
    }, 
    data_demissao:{ type:
       DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Motorista',
    tableName: 'motoristas',
    timestamps: false
  });
  return Motorista;
};