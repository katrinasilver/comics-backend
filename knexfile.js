const path = require('path')
const DB_NAME = 'comics'

module.exports = {

  development: {
    client: 'pg',
    connection: `postgresql://localhost/${DB_NAME}_dev`,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    // migrations: {
    //   directory: path.join(__dirname, 'db', 'migrations')
    // },
    // seeds: {
    //   directory: path.join(__dirname, 'db', 'seeds')
    // }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: path.join(__dirname, 'db', 'migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'db', 'seeds')
    }
  }
}
