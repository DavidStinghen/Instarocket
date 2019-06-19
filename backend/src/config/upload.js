const multer = require('multer')
const path = require('path')

/**
 * modulo de configuração dos uploads de imagens
 * declarando onde a imagem vai ser salva e o nome que a imagem deve ter
 */
module.exports = {
    storage : new multer.diskStorage ({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, callback) {
            callback(null, file.originalname)
        }
    })
}