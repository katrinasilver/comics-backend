const TABLE_NAME = 'comics'

exports.up = knex => {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments()
    table.string('title').notNullable()
    table.text('url').notNullable()
    table.integer('rating').notNullable().defaultsTo(0)
    table.text('review').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = knex => knex.schema.dropTableIfExists(TABLE_NAME)
