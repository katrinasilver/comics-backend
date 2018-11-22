const TABLE_NAME = 'comics'

exports.seed = knex => {
  return knex(TABLE_NAME).del()
}
