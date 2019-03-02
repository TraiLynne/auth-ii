const express = require('express');

// Main Router Declaration
const mainRouter = express.Router();

// Sub-Routers
const authRouter = require('./auth');
const userRouter = require('./users');

// Routes
mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);

// General Route
mainRouter.use('/', (req, res) => res.send('Welcome to the Main API'));

// Export
module.exports = mainRouter;