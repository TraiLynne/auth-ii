require('dotenv').config();

const express = require('express');

const router = express.Router();
const userRoutes = require('./userRouter');

router.use(express.json());

router.post('/register', (req, res) => {
    res
        .status(201)
        .json({
            url: '/api/register',
            operation: 'POST'
        });
});

router.post('/login', (req, res) => {
    res
        .status(201)
        .json({
            url: '/api/login',
            operation: 'POST'
        });
});

router.use('/users', userRoutes);
router.use('/', (req, res) => res.send('Welcome to the Main API'));

module.exports = router;