const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const {username, password} = req.body;
    const {session} = req;
    let randomNum = Math.floor(Math.random() * 1000)
    const profile_pic = `https://robohash.org/${randomNum}`
    const db = req.app.get('db');
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.users.register({
      username: username, 
      hash: hash,
      profile_pic: profile_pic
    })
    console.log('new user', newUser)
    session.user = {...newUser}
    console.log('session user', session.user)
    res.status(201).send(session.user)
  },

  login: async (req,res) => {
    const {username, password} = req.body;
    const {session} = req
    const db = req.app.get('db')
    let user = await db.users.login({username: username})
    user = user[0]
    const foundItem = bcrypt.compareSync(password, user.hash);
    console.log('not broken')
    if(foundItem) {
      delete user.password
      session.user = user
      res.status(200).send(session.user)
    } else {
      res.sendStatus(401)
    }
  },

  getUser: (req, res) => {
    const {user} = req.session;
    if(user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(418);
    }
  },
}