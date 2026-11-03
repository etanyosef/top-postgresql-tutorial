const { Pool } = require('pg');

module.exports = new Pool({
    host: 'localhost',
    user: 'ethan',
    password: 'asdasd123',
    database: 'top_users',
    port: 5432, // default port
});