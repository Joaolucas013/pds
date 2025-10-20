'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Manutencao extends Model {
   
    static associate(models) {
   Manutencao.belongsTo(models.Motorista, {
    foreignKey: 'fk_motorista'
   }),

   Manutencao.belongsTo(models.Veiculo, {
    foreignKey: 'fk_veiculo'
   }),

   Manutencao.hasMany(models.Ordem_Servico, {
    foreignKey: 'manutencao_id'
   })
    }
  } 
  Manutencao.init({
    data_manutencao: {
      type: DataTypes.DATEONLY
    },
  
  id_manutencao: {
    type: DataTypes.TINYINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    }
    

  },

  
  {
    sequelize,
    modelName: 'Manutencao',
    tableName: 'manutencoes',
    timestamps: false
  });
  return Manutencao;
};