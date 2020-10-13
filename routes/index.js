const express = require('express');
const router = express.Router();
const pool = require('../utils/pgdb');

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});

module.exports = router;
