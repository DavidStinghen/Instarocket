const Post = require('../models/Post')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

module.exports = {

    // metodo para listar todos os posts por ordem de data de criação
    async index (req, res) {
        const posts = await Post.find().sort('-createdAt')
        return res.json(posts)
    },

    /** 
     * metodo para adicionar novos posts com imagens
     * definindo o nome da imagem que aparece na url como nome.jpg
     * usado sharp para redimensionar a imagem
     * usado fs para deletar a imagem de tamanho original
     * usado io para enviar uma mensagem para o frontend quando for feita um post
    */
   async store(req, res){
        const { author, place, description, hashtags } = req.body;
        const { filename: image } = req.file;

        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        await sharp(req.file.path)
            .resize(500)
            .jpeg( {quality: 70})
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            )

        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: fileName
        });

        req.io.emit('post', post);

        return res.json(post);
    }

    
}