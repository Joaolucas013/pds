'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Veiculo extends Model {


    static associate(models) {
      Veiculo.belongsTo(models.Modelo, {
        foreignKey: {
          name: 'modelo_id',
          allowNull: false
        },
        onDelete: 'CASCADE',
      });

      Veiculo.hasMany(models.Veiculo_Motorista, {
        foreignKey: 'fk_veiculo'
      })
    }
  }
  Veiculo.init({
    placa: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },


    chassi: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },

    tipo: {
      type: DataTypes.STRING,
    },

    cor: {
      type: DataTypes.STRING,
    },

    situacao: {
      type: DataTypes.BOOLEAN,
    },

    quilometragem: {
      type: DataTypes.DECIMAL,
    },
    ano_fabricacao: {
      type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'Veiculo',
    tableName: 'veiculos',
    timestamps: false
  });
  return Veiculo;
};