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
      "Spanishes",
      [
        {
          word: "Agua",
          englishId:1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { word: "Casa",
        englishId:2,
         createdAt: new Date(), updatedAt: new Date() },
        {
          word: "Hola",
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
    await queryInterface.bulkDelete("Spanishes", null, {});
  },
};
