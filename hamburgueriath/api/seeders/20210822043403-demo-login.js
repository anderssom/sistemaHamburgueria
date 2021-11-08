'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('logins', [{
    email: 'ze@ruela.com',
    ativo: true,
    password: 'vagabundo',
    role: 'vagabundonato',
    createdAt: new Date(),
    updatedAt: new Date()
  }], {})
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
