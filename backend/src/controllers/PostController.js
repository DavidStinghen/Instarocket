const Post = require('../models/Post')

module.exports = {

    // metodo para listar todos os posts por ordem de data de criação
    async index (req, res) {
        const posts = await Post.find().sort('-createdAt')
        return res.json(posts)
    },

    //metodo para adicionar novos posts com imagens
    async store (req, res) {
        const { author, place, description, hashtags } = req.body
        const { filename: image } = req.file

        const posts = await Post.create({
            author,
            place,
            description,
            hashtags,
            image
        })
        return res.json(posts)
    },

    
}