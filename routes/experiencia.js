//hacer las peticiones post, get , delete
/*
path : api/expriencia
*/

const { Router } = require('express');
const { agregarExperiencia } = require('../controllers/experiencia/agregarExperiencia')
// const { validarJWT } = require('../middlewares/validar-jwt');
const { eliminarExperiencia } = require('../controllers/experiencia/eliminarExperiencia');
const { editarExperiencia } = require('../controllers/experiencia/editarExperiencia');

const router = Router();
router.get('/agregar', agregarExperiencia);
router.get('/eliminar', eliminarExperiencia);
router.get('/editar', editarExperiencia);


module.exports = router;