/* called when migration is run */
exports.up = function (knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.increments('reservation_id').primary().notNullable()
    table.string('first_name', 255).notNullable()
    table.string('last_name', 255).notNullable()
    table.string('mobile_number', 12).notNullable()
    table.date('reservation_date', 10).notNullable()
    table.time('reservation_time', 8).notNullable()
    table.integer('people').notNullable()
    table.string('status')
    table.timestamps(true, true)
  })
}

/** called when migration is rolled back */
exports.down = function (knex) {
  return knex.schema.dropTable('reservations')
}
