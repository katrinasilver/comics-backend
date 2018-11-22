const db = require('./db')

db('comics')
  .join('comics')
  .then(data => {
    console.log(data)
  }).catch(() => {
    console.log(`❌ Connection Failed`);
  }).finally(db.destroy)
