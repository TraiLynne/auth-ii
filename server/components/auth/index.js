const express = require('express');

// Router Declaration
const router = express.Router();

// Routes
router.post('/register', (req, res) => {
    res
        .status(201)
        .json({
            operation: 'POST',
            url: '/api/auth/register'
        })
});

router.post('/login', (req, res) => {
    res
        .status(201)
        .json({
            operation: 'POST',
            url: '/api/auth/login'
        })
});

// General Route
router.use('/', (req, res) => res.send('Welcome to the AuthN & AuthZ'));

// Export
module.exports = router;