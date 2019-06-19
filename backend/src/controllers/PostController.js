const Post = require('../models/Post')

module.exports = {

    async index (req, res) {
        const post = await Post.find()
    },

    //rota para adicionar novos posts com imagens
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