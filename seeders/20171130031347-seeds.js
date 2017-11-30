'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
     return queryInterface.bulkInsert('days', [{
        weekday: 'Monday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      },{
        weekday: 'Tuesday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      }, {
        weekday: 'Wednesday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      }, {
        weekday: 'Thursday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      }, {
        weekday: 'Friday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      }, {
        weekday: 'Saturday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      }, {
        weekday: 'Sunday',
        openTime: "7:30",
        closeTime: "16:00",
        iteration: 10
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('days', null, {});
  }
};
