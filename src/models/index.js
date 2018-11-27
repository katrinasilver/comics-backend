const db = require('../../db')

const get = (id) => db('comics').where({ id: id }).first()

const getAll = (limit) =>
  !limit || limit === '0' ? db('comics') : db('comics').limit(limit)

const create = (title, url, rating, review) => {
  return (
    db('comics')
      .insert({ title, url, rating, review })
      .returning('*')
      .then(([ data ]) => data)
  )
}

const edit = (id, { title, url, rating, review }) => {
  return (
    db('comics')
      .update({ title, url, rating, review })
      .where({ id: id })
      .returning('*')
      .then(([ data ]) => data)
  )
}

const remove = (id) => {
  return (
    db('comics')
      .del()
      .where({ id: id })
      .returning('*')
      .then(([ data ]) => {
        delete data.id
        return data
      })
  )
}

module.exports = { get, getAll, create, edit, remove }
