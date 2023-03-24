const reservations = require('./00-reservations.json')

exports.seed = function (knex) {
  return (
    knex
      .raw('TRUNCATE TABLE reservations RESTART IDENTITY CASCADE')
      /* insert reservations into the reservations table */
      .then(() => knex('reservations').insert(reservations))
  )
}
