const db = require('../../db')

const get = (id) => db('table_name').where({ id: id }).first()

const getAll = (limit) =>
  !limit || limit === '0' ? db('table_name') : db('table_name').limit(limit)

const create = (title, name, long_text, rating) => {
  return (
    db('table_name')
      .insert({ title, name, long_text, rating })
      .returning('*')
      .then(([ data ]) => data)
  )
}

const edit = (id, title, name, long_text, rating) => {
  return (
    db('table_name')
      .update({ title, name, long_text, rating })
      .where({ id: id })
      .returning('*')
      .then(([ data ]) => data)
  )
}

const remove = (id) => {
  return (
    db('table_name')
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
