const TABLE_NAME = 'table_name' // replace with actual table name

exports.seed = knex => {
  return knex(TABLE_NAME).del()
}
