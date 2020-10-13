const pool = require('./pgdb');


async function createDb () {
    try {
        const checkTable = await pool.query('SELECT * from reguser');

        console.log(checkTable);
    } catch (err) {
        //  create table
        try {
            await pool.query(`CREATE TABLE reguser(
                     id SERIAL,
                     username VARCHAR(50) PRIMARY KEY,
                     email VARCHAR(50) UNIQUE,
                     password VARCHAR(50) NOT NULL
                     )`);
        } catch (err1) {
            console.log(err1);
        }
    }
}

module.exports = createDb;
