const pool = require('./pgdb');

async function registerUser (res, un, em, p) {
    // lets use the data from the post req to
    // register the user.
    try {
        const query = await pool.query(`INSERT INTO reguser (username, email, password)
        VALUES ($1, $2, $3)`, [ un, em, p ]);

        console.log(query);

        res.send(`Account has been created for ${un}! Now login.`);
    } catch (err) {
        console.log(err);

        res.send('You registeration has failed. Please look at the credentials.');
    }
}

function authenticateUser () {
    //
}

module.exports.registerUser = registerUser;
