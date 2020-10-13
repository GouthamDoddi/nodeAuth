const express = require('express');
const router = express.Router();
const { registerUser } = require('../utils/accountQueries');

router.get('/', (req, res, err) => {
    if (err)
        console.log(err);
    res.render('register');
});

router.post('/', (req, res, next) => {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    const { password2 } = req.body;

    const validPass = validatePassword(password, password2);


    // insert data to db
    if (validPass) {
        registerUser(res, username, email, password);
    } else {
        res.send('please check both the passwords field are valid and same.');
        // send error
        console.log(req.body);
    }
});

function validatePassword (p, p2) {
    if (!(p === p2 && p.length >= 8))
        return false;

    const hasNumber = /\d/,
          hasChar = /[A-Za-z]/;

    return hasNumber.test(p) && hasChar.test(p);
}

module.exports = router;
