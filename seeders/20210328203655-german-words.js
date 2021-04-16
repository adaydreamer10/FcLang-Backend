'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      "Germans",
      [
        {
          word: "Wasser",
          englishId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { word: "Zuhause",
        englishId:2,
         createdAt: new Date(), 
         updatedAt: new Date() },
        {
          word: "Hallo",
          englishId:3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Germans", null, {});
  },
};




