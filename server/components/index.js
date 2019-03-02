const express = require('express');

const mainRouter = express.Router();

const authRouter = require('./auth');
const userRouter = require('./users');


mainRouter.use('/auth', authRouter);
mainRouter.use('/users', userRouter);

mainRouter.use('/', (req, res) => res.send('Welcome to the Main API'));

module.exports = mainRouter;