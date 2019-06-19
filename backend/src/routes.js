const express = require('express')
const routes = new express.Router()
const PostController = require('./controllers/PostController')

routes.post('./posts', PostController.store)

module.exports = routes