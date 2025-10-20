'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Itens extends Model {
  
    static associate(models) {
      Itens.belongsTo(models.Material, {
        foreignKey: 'fk_material'
      });

    Itens.belongsTo(models.Ordem_Servico, {
      foreignKey: 'ordem_servico_id'
    })  
    }
  }
  Itens.init({
    valor_unitario: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    fk_material: {
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    quantidade: {
      type: DataTypes.INTEGER,
      allowNull: false
    },


  }, {
    sequelize,
    modelName: 'Itens',
    tableName: 'itens',
    timestamps: false
  });
  return Itens;
};