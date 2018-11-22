const TABLE_NAME = 'comics'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      title: 'Avengers #1',
      url: 'Long placeholder text',
      rating: 5,
      review: 'Epic adventures that you can\'t imagine >.>. You gotta read it to believe it!'
    },
    {
      id: 2,
      title: 'The Sandman Vol. 3 - Dream Country',
      url: 'Long placeholder text',
      rating: 5,
      review: 'Neil Gaiman\'s best work by far'
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
