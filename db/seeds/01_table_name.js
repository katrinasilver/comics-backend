const TABLE_NAME = 'table_name' // replace with actual table name

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      title: 'Title1',
      name: 'Name1',
      long_text: 'Long placeholder text',
      rating: 5
    },
    {
      id: 2,
      title: 'Title2',
      name: 'Name2',
      long_text: 'Long placeholder text',
      rating: 4
    },
    {
      id: 3,
      title: 'Title',
      name: 'Name',
      long_text: 'Long placeholder text',
      rating: 2
    }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
  })
}
