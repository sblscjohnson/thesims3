require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser')
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env
const app = express()


app.listen(SERVER_PORT, () => console.log(`yeet ${SERVER_PORT}`))