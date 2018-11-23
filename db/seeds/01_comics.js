const TABLE_NAME = 'comics'

exports.seed = knex => {
  return knex(TABLE_NAME).insert([
    {
      id: 1,
      title: 'Avengers #1',
      url: 'http://www.coverbrowser.com/image/avengers/1-1.jpg',
      rating: 5,
      review: 'Epic adventures that you can\'t imagine >.>. You gotta read it to believe it!'
    },
    {
      id: 2,
      title: 'The Sandman Vol. 3: Dream Country by Neil Gaiman',
      url: 'http://www.coverbrowser.com/image/bestselling-comics-2006/81-1.jpg',
      rating: 5,
      review: 'Neil Gaiman\'s best work by far'
    },
    {
      id: 3,
      title: 'Uncanny X-Men #1',
      url: 'http://www.coverbrowser.com/image/uncanny-x-men/1-3.jpg',
      rating: 3,
      review: 'Well... Logan\'s claws were just too dang short'
    },
    {
      id: 4,
      title: 'Judge Dredd - 2000 AD #1',
      url: 'http://www.coverbrowser.com/image/judge-dredd-2000-ad/1-1.jpg',
      rating: 4,
      review: 'So good...'
    },
    {
      id: 5,
      title: 'Green Lantern (1960) #1',
      url: 'http://www.coverbrowser.com/image/green-lantern-1960/1-1.jpg',
      rating: 1,
      review: 'I mean seriously...'
    }
  ])
    .then(() => {
      return knex.raw(`SELECT setval('${TABLE_NAME}_id_seq', (SELECT MAX(id) FROM ${TABLE_NAME}));`)
    })
}
