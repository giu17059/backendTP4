

const User = require('../models/user'); // Importar el modelo User
const bcrypt = require('bcrypt');

// Crear un nuevo usuario

exports.createUser = async (req, res) => {
    console.log("Request body:", req.body);
    const { name, email, password } = req.body;

    if (password.length < 8) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 8 caracteres.' });
    }
    try { 
        
        // Encriptar la contraseña antes de guardarla en la base de datos
        const hashedPassword = await bcrypt.hash(password, 10);


        // Crear el usuario con la contraseña encriptada
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Usuario creado con éxito', user: newUser });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ error: 'Error al crear usuario' });
    }
};



exports.getUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const myUser = await User.findOne({ where: { email } });
        
        if (!myUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña ingresada con la contraseña encriptada
        const isMatch = await bcrypt.compare(password, myUser.password);
        
        if (!isMatch) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }

        res.json({ message: 'Autenticación exitosa', user: { id: myUser.id, email: myUser.email, name: myUser.name } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll(); // Obtener todos los usuarios
        res.status(200).json(users); // Devolver los usuarios encontrados
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        res.status(500).json({ error: 'Error al obtener usuarios' }); // Manejo de errores
    }
};

// Actualizar un usuario
exports.updateUser = async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la ruta
    const { newEmail } = req.body; // Obtener el nuevo correo del cuerpo de la solicitud

    try {
        const user = await User.findByPk(id); // Buscar el usuario por su ID
        if (user) {
            user.email = newEmail; // Actualizar el correo
            await user.save(); // Guardar los cambios en la base de datos
            res.status(200).json(user); // Devolver el usuario actualizado
        } else {
            res.status(404).json({ error: 'User not found' }); // Manejo si el usuario no se encuentra
        }
    } catch (error) {
        console.error('Error al actualizar usuario:', error);
        res.status(500).json({ error: 'Error al actualizar usuario' }); // Manejo de errores
    }
};

// Borrar un usuario
exports.deleteUser = async (req, res) => {
    const { id } = req.params; // Obtener el ID del usuario de los parámetros de la ruta

    try {
        const user = await User.findByPk(id); // Buscar el usuario por su ID
        if (user) {
            await user.destroy(); // Borrar el usuario de la base de datos
            res.status(200).json({ message: `Usuario con ID ${id} eliminado` }); // Enviar mensaje de éxito con 200 OK
        } else {
            res.status(404).json({ error: 'Usuario no encontrado' }); // Manejo si el usuario no se encuentra
        }
    } catch (error) {
        console.error('Error al borrar usuario:', error);
        res.status(500).json({ error: 'Error al borrar usuario' }); // Manejo de errores
    }
};

