const User = require('../models/user')

function userLoggedIn (req, res, next) {
  const userEmail = req.get('User-Email')
  const authToken = req.get('Auth-Token')
  if (!userEmail || !authToken) return res.status(401).json({error: 'unauthorised access'})

  User.findOne({email: userEmail, auth_token: authToken}, (err, user) => {
    if (err || !user) return res.status(401).json({error: 'unauthorised'})

    req.currentUser = user
    next()
  })
}

var signIn = (req, res) => {
  const userParams = req.body.user

  User.findOne({email: userParams.email}, (err, user) => {
    if (err || !user) return res.status(401).json({error: err.message})

    user.authenticate(userParams.password, (err, isMatch) => {
      if (err || !isMatch) return res.status(401).json({error: 'email or password is invalid'})

      else res.status(201).json({message: 'user logged in', auth_token: user.auth_token})
    })
  })
}

var signUp = (req, res) => {
  const user = new User(req.body.user)
  user.save((err, user) => {
    if (err) return res.status(401).json({error: err})
    else res.status(201).json(user)
  })
}

module.exports = {
  userLoggedIn: userLoggedIn,
  signIn: signIn,
  signUp: signUp
}
