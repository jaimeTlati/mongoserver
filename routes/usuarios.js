//hacer las peticiones post, get , delete
/*
path : api/usuarios
*/

const { Router } = require('express');
const {getUsuarios} = require('../controllers/usurios')
// const { validarJWT } = require('../middlewares/validar-jwt');
var cors = require('cors')

const router = Router();
router.get('/', getUsuarios);
module.exports = router;