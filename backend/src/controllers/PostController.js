const Post = require('../models/Post')

module.exports = {

    async index (req, res) {
        const post = await Post.find()
    },

    async store (req, res) {
        const posts = await Post.create()
        return res.json(posts)
    },

    
}