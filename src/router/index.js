const express = require('express')
const route = express.Router()

const product = require('./products')
const movie = require('./movie')
const genre = require('./genre')
const users = require('./users')
const auth = require('./auth')

route.use('/product', product)
route.use('/movie', movie)
route.use('/genre', genre)
route.use('/users', users)
route.use('/auth', auth)

module.exports = route
