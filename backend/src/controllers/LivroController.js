const Livro = require('../models/Livros')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')


module.exports = {
  // Lista os Livros do mais atual para o mais antigo
  async index(req, res) {
    const { page = 1 } = req.query;
    const books = await Livro.paginate({}, { page , limit: 5, sort: {createdAt: -1}});
    return res.json(books);
  },

  // gravar os livros
  async store(req, res) {
    const { author, nomeLivro, numeroPaginas, editora, isbn } = req.body;
    const { filename: image} = req.file

    const [name, ext] = image.split('.')
    const fileName = `${name}.jpg`

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70})
      .toFile(
        path.resolve(req.file.destination, 
          'resizes', fileName)
      )

    fs.unlinkSync(req.file.path)

    const book = await Livro.create({
      author,
      nomeLivro,
      numeroPaginas,
      editora,
      isbn,
      filePath: fileName,
    });

    return res.json(book);
  },
  
  // Exclui o livro
  async destroy(req, res) {
    const { id } = req.params;
    await Livro.findByIdAndRemove(id);
    return res.send()
  },

  

}

