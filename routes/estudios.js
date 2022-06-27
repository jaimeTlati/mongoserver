//hacer las peticiones post, get , delete
/*
path : api/estudios
*/

const { Router } = require('express');
const {agregarEstudios} = require('../controllers/estudios/agregarEstudio')
// const { validarJWT } = require('../middlewares/validar-jwt');
const { eliminarEstudios } = require('../controllers/estudios/eliminarEstudios');
const { editarEstudios } = require('../controllers/estudios/editarEstudios');

const router = Router();
router.get('/agregar', agregarEstudios);
router.get('/eliminar', eliminarEstudios);
router.get('/editar', editarEstudios);


module.exports = router;