require('dotenv').config();

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            url: '/api/users',
            operation: 'GET'
        });
});

router.use('/', (req, res) => res.send('Welcome to the User API'));

module.exports = router;