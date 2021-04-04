'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class German extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      German.belongsTo(models.English,{foreignKey:"englishId"})
    }
  };
  German.init({
    word: DataTypes.STRING,
    englishId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'German',
  });
  return German;
};