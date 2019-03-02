const express = require('express');

// Router Declaration
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res
        .status(200)
        .json({
            operation: 'GET',
            url: '/api/users'
        })
})
// General Route
router.use('/', (req, res) => res.send('Welcome to the Users API'));

// Export
module.exports = router;