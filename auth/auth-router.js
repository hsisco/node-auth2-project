const router = require('express').Router();

const bcrypt = require('bcryptjs');

const Helpers = require('../users/helpers');

const generateToken = require('./generate-token')


// REGISTER
router.post('/api/register', (req, res) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Helpers.add(user)
    .then(saved => res.status(201).json(saved))
    .catch(err => res.status(500).json(err))
});

// LOGIN
router.post('/api/login', (req, res) => {
  let { username, password } = req.body;

  Helpers.findBy({ username })
    .then(async (user) => {
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = await generateToken(user)
        res.status(200).json({ message: `Welcome, ${user.username}!` })
      } else {
        res.status(401).json({ message: 'You shall not pass!' })
      }
    })
    .catch(err => res.status(500).json({ message: 'You shall not pass!', err })
    )
});

// GET ALL USERS
router.get('/api/users', (req, res) => {
  Helpers.find()
    .then(users => res.json(users.username, users.department))
    .catch(err => {
      res.status(500).json({ message: 'You shall not pass!', err })
    console.log(err)
    }
    )
});

module.exports = router;