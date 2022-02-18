const { Router } = require("express");
const { Persona, Usuario } = require("../db.js");

const router = Router();

router.post("/", async(req, res)=> {
    try {
        const {nombre, apellido, edad, usuario, contraseña} = req.body
        const validate = await Usuario.findOne({where: {usuario}})

        if(validate) {
            return res.send({mensaje: "el usuario ya existe"});
        }

        const usuarioCreado = await Usuario.create({
            usuario,
            contraseña
        })

        const personaCreada = await Persona.create({
            nombre,
            apellido,
            edad,
            usuarioId: usuarioCreado.id
        })
       
        res.send(personaCreada);

    } catch (error) {
        res.send(error)
    }
})

module.exports = router;