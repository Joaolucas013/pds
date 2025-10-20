'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Procedimento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Procedimento.belongsTo(models.Setor, {
        foreignKey: 'setor_id',
      })
    }
  }
  Procedimento.init({
    descricao: {
      type: DataTypes.STRING,
    }, 
   
   valor_unitario: {
   type:  DataTypes.DOUBLE,
   allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Procedimento',
    tableName: 'procedimentos',
    timestamps: false
  });
  return Procedimento;
};