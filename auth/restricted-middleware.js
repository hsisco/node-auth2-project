// const bcrypt = require('bcryptjs');

// const Helpers = require('../users/helpers');

module.exports = (req, res, next) => {
  if (req.headers.token) {
    next();
  } else {
    res.status(400).json({ message: 'No credentials provided' });
  }
};