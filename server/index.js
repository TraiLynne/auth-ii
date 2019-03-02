require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

server.use(cors());
server.use(helmet());

server.use('/', (req, res) => res.send('It\'s working !!\nIt\'s working !!'));

module.exports = server;