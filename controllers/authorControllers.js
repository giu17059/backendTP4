const Author = require('../models/author');  

    exports.createAuthor = async (req, res) => {
        try {
            console.log("Autor recibido:", req.body);
            const { nombre } = req.body;

            const nuevoAuthor = await Author.create({
                nombre
            });
            res.status(201).json(nuevoAuthor); 
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al crear Autor'})
        }
    },
    exports.getAuthors = async (req, res) => {
        try{
            const authors = await Author.findAll();

            res.status(200).json(authors);            
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al obtener autores'})
        }
    };
    exports.getAuthor = async (req, res) => {
        try {
            const author = await Author.findByPk(req.params.id);
            if (!author) {
                return res.status(404).json({ error: 'Autor no encontrado' });
            }
            res.json(author);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    exports.updateAuthor = async (req, res) => {
        try {
            const author = await Author.findByPk(req.params.id);
            if (!author) {
                return res.status(404).json({ error: 'Autor no encontrado' });
            }
            const updatedAuthor = await author.update(req.body);
            res.json(updatedAuthor);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    exports.deleteAuthor = async (req, res) => {
        try {
            const author = await Author.findByPk(req.params.id);
            if (!author) {
                return res.status(404).json({ error: 'Autor no encontrado' });
            }
            await author.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };

