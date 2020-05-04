const { Router } = require('express')
const multer = require('multer')
const LivroController = require('./controllers/LivroController')
const uploadConfig = require('./config/upload')
const routes = new Router();

const upload = multer(uploadConfig)
routes.post('/livros', upload.single('image'), LivroController.store)
routes.get('/listaLivros', LivroController.index)
routes.delete('/livros/:id', LivroController.destroy)

module.exports = routes