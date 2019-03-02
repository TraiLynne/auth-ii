require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const mainRouter = require('./components');

server.use(cors());
server.use(helmet());

server.use('/api', mainRouter);

server.use('/', (req, res) => res.send('It\'s working !!\nIt\'s working !!'));

module.exports = server;