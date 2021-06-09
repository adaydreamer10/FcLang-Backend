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
      "Englishes",
      [
        {
          word: "I",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { word: "You",
         createdAt: new Date(), 
         updatedAt: new Date() },
        {
          word: "He",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "We",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "You",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "They",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "This",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "That",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Here",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "There",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );////////
    await queryInterface.bulkInsert(
      "Spanishes",
      [
        {
          word: "Yo",
          englishId:4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { word: "Tú",
        englishId:5,
         createdAt: new Date(), updatedAt: new Date() },
        {
          word: "Él",
          englishId:6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Nosotros",
          englishId:7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Vosotros",
          englishId:8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Ellos, Ellas",
          englishId:9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Este",
          englishId:10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Ese, Aquel",
          englishId:11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Aquí, Acá",
          englishId:12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          word: "Allí, Allá",
          englishId:13,
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
  }
};
