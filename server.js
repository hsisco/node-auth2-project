const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth-router');
const usersRouter = require('./users-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('./auth-router', authRouter);
server.use('./users-router', usersRouter);

server.get('/', (req, res) => {
  res.send("Generic user authenticator")
});

module.exports = server;