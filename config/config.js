require('dotenv').config();
module.exports ={
  "development": {
    "username": process.env.pg_username,
    "password": process.env.pg_password,
    "database": process.env.pg_database,
    "host": process.env.pg_host,
    "port": process.env.pg_port,
    "dialect": "postgres",
    "logging": false
  },
  "test": {
    "username": "root",
    "password": process.env.pg_password,
    "database": process.env.pg_database,
    "host": process.env.pg_host,
    "port": process.env.pg_port,
    "dialect": "postgres",
    "logging": true
  },
  "production": {
    "username": process.env.pg_username,
    "password": process.env.pg_password,
    "database": process.env.pg_database,
    "host": process.env.pg_host,
    "port": process.env.pg_port,
    "dialect": "postgres",
    "logging": true
  }
};
