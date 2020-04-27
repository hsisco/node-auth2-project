const jwt = require('jsonwebtoken');

module.exports = (user) => {
  console.log('Token');
  const payload = {
    subject: user.id,
    username: user.username,
    department: user.department
  }
  const options = { expiresIn: '120m'}

  const token = jwt.sign(payload, process.env.JWT_SECRET, options)

  return token;
}