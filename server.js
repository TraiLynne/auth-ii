require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();
const port = process.env.PORT || 4000;

server.use('/', (req, res) => res.send('It\'s working !!\nIt\'s Working !!'));

server.listen(port, () => console.log(`Server listening on port ${port}`));