const express = require('express')
const route = express.Router()
const ctrl = require('../controller/product')
const upload = require('../middleware/upload')

route.get('/slug/:slug', ctrl.fetchBySlug)
route.get('/', ctrl.fetchData)
route.post('/', upload.single('image'), ctrl.save)

module.exports = route
