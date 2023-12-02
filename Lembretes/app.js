const express = require('express')
const axios = require('axios');
const router = require ('./router')

const app = express()

app.use(express.json())
app.use(router)

module.exports = app