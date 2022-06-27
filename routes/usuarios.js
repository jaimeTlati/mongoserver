//hacer las peticiones post, get , delete
/*
path : api/usuarios
*/

const { Router } = require('express');
const {getUsuarios} = require('../controllers/usurios')
const { editarNombre } = require('../controllers/editarNombreU');
const { newUser } = require('../controllers/usuarios/nuevoUser');

const router = Router();
router.get('/', getUsuarios);
router.get('/editarNombre', editarNombre);
router.get('/newUser', newUser);


module.exports = router;