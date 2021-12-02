const User = require('universal/models/User')
module.exports = (req, res, next) => {
  res.json(User.populate({
    id: 1000,
    name: 'Guest User',
    nameSafe: 'guest-user'
  }))
}
