'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class English extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      English.hasOne(models.Spanish,{foreignKey:"englishId"});
      English.hasOne(models.German,{foreignKey:"englishId"});
    }
  };
  English.init({
    word: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'English',
  });
  return English;
};