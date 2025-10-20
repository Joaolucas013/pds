'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trabalha extends Model {
   
    static associate(models) {
      Trabalha.belongsTo(models.Funcionario, {
          foreignKey: 'funcionario_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });

      Trabalha.belongsTo(models.Procedimento, {
        foreignKey: 'procedimento_id'
      });

      Trabalha.belongsTo(models.Ordem_Servico, {
        foreignKey: 'ordem_servico_id'
      })
    }
  }
  Trabalha.init({ 
    valor_unitario: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },

    ordem_servico_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    procedimento_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    },
    funcionario_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false
    }
    ,
    data_realizacao: {
      type: DataTypes.DATEONLY
    }
  }, {
    sequelize,
    modelName: 'Trabalha',
    tableName: 'trabalha',
    timestamps: false
  });
  return Trabalha;
};