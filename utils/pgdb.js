'use strict';

const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '121212',
    host: 'localhost',
    port: 5432,
    database: 'nodeapp',
});

module.exports = pool;
