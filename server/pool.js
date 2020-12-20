const { Pool } = require('pg');
const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  port: 5433,
  password: '123',
  database: 'retail'
});

module.exports = db;