const Category  = require('../models/category'); 

    exports.createCategory = async (req, res) => {
        try {
            console.log("Categoria recibida:", req.body); 
            const { name } = req.body;

            const nuevaCategory = await Category.create({
                name,
            });
            res.status(201).json(nuevaCategory);
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al crear Categoria'})
        }
    }, 
    exports.getCategories = async (req, res) => {
        try{
            const categories = await Category.findAll();

            res.status(200).json(categories);            
        } catch(error) {
            console.error(error);
            res.status(500).json({message: 'Error al obtener categorias'})
        }
    };

    exports.getCategory = async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) {
                return res.status(404).json({ error: 'Categoría no encontrada' });
            }
            res.json(category);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    exports.updateCategory = async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) {
                return res.status(404).json({ error: 'Categoría no encontrada' });
            }
            const updatedCategory = await category.update(req.body);
            res.json(updatedCategory);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    exports.deleteCategory = async (req, res) => {
        try {
            const category = await Category.findByPk(req.params.id);
            if (!category) {
                return res.status(404).json({ error: 'Categoría no encontrada' });
            }
            await category.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };


