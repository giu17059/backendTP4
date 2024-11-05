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
    exports.getAuthor = async (req, res) => {
        try{
            const authors = await Author.findAll();

            res.status(200).json(authors);            
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al obtener autores'})
        }
    };


