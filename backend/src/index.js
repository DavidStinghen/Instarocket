const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

const app = express()

// conexão com o banco de dados
mongoose.connect('mongodb+srv://mongodb:mongodb@cluster0-weljl.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true })

// caminho para arquivos estáticos
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')))
// chamada as rotas
app.use(require('./routes'))
// declarando que o server deve ouvir a porta 3333
app.listen(3333)