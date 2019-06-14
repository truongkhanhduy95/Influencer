require('dotenv').config();
var path = require('path');

module.exports = {
  'default': process.env.DB_CONNECTION,
  'connections': {
    'mysql': {
      dialect: process.env.DB_CONNECTION,
      database: process.env.MYSQL_DATABASE,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOST
    }
  }
};
