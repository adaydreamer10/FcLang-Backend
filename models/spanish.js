'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spanish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spanish.belongsTo(models.English,{foreignKey:"englishId"})
    }
  };
  Spanish.init({
    word: DataTypes.STRING,
    englishId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spanish',
  });
  return Spanish;
};