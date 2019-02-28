require('dotenv').config();

const express = require('express');

const router = express.Router();
const db = require('../db/helpers/userModel');
const jwt = require('./helpers/jwtModel')

router.use(jwt.restrictRoute());

router.get('/', async (req, res) => {
    try {
        const users = await db.readAll();

        users.length > 0 ?
            res
                .status(200)
                .json(users)
            :
            res
                .status(404)
                .json('There were no users found')
    } catch (err) {
        res
            .status(200)
            .json('Houston, we have a problem');
    }
});

router.use('/', (req, res) => res.send('Welcome to the User API'));

module.exports = router;