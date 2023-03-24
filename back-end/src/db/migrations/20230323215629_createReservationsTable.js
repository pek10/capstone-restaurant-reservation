exports.up = function (knex) {
  return knex.schema.createTable('reservations', (table) => {
    table.increments('reservation_id').primary()
    table.timestamps(true, true)
    table.string('first_name', 255).notNullable()
    table.string('last_name', 255).notNullable()
    table.string('mobile_number', 12).notNullable()
    table.string('reservation_date', 10).notNullable()
    table.string('reservation_time', 8).notNullable()
    table.integer('people').notNullable()
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('reservations')
}
