const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const registrarUsuario = require("./registroUsuario.js");
const iniciarSesion = require("./loginUsuario.js");
const obtenerUsuarios = require("./obtenerUsuarios")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/registrar", registrarUsuario);
router.use("/iniciarSesion", iniciarSesion);
router.use("/obtenerUsuarios", obtenerUsuarios);
module.exports = router;
