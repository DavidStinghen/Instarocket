const express = require('express')
const routes = new express.Router()

const PostController = require('./controllers/PostController')

const uploadConfig = require('./config/upload')

// uso do multer para ser possivel o envio de arquivos multipart
const multer = require('multer')
const upload = multer(uploadConfig)

/**
 * rota para adicionar posts
 * declarando que sera feito upload de uma unica imagem
 * chamada a função store
 */
routes.post('/posts', upload.single('image'), PostController.store)

module.exports = routes