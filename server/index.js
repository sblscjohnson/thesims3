require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const app = express();
const session = require('express-session')
const ctrl = require('./controller')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(bodyParser.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  maxAge: null
}))

massive(CONNECTION_STRING).then(db => {
  app.set('db', db);
  db.user_init()
  app.listen(SERVER_PORT, () => console.log(`yeet ${SERVER_PORT}`))
})

// authentication
app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)

// user data
app.get('/api/user', ctrl.getUser)