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

  getUser: (req, res) => {
    const {user} = req.session;
    if(user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(418);
    }
  },
}