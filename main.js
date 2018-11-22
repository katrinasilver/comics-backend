const db = require('./db')

db('table_name')
  .join('table_name')
  .then(data => {
    console.log(data)
  }).catch(() => {
    console.log(`❌ Connection Failed`);
  }).finally(db.destroy)
