const knex = require('knex');

const knexConfig = knex('../knexfile.js');

module.exports = knexConfig.development;