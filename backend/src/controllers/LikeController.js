const Post = require('../models/Post')

module.exports = {

    /** 
     * metodo para adicionar likes
     * adiciona  + 1 ao numero de likes atuais
     * aguarda salvar a transação antes de retornar
    */
    async store (req, res) {
        const post = await Post.findById(req.params.id)
        
        post.likes +=1
        await post.save()

        return res.json(post)
    },

    
}