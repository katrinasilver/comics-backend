const TABLE_NAME = 'table_name' // replace with actual table name

exports.up = knex => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()
    table.string('title').notNullable()
    table.string('name', 30).notNullable()
    table.text('long_text').notNullable()
    table.integer('rating').notNullable().defaultsTo(0)
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTableIfExists(TABLE_NAME)
