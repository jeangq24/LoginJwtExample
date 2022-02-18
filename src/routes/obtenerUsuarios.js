const Router = require("express");
const { Usuario } = require("../db.js");
const jwt = require("jsonwebtoken");
const router = Router();
const {SECRET_KEY}= process.env;
const verificacionToken = require("./verificacionToken.js");


router.get("/", verificacionToken, async(req,res)=> {
    try {

        jwt.verify(req.token, SECRET_KEY, async(error, data) => {
            if(error) {
                res.sendStatus(403);
            }else {
                const usuarios = await Usuario.findAll();
                res.send (
                    {
                        data,
                        mensaje: usuarios
                    }
                )
            }
        })
    } catch (error) {
        res.send(error);
    }

})

module.exports = router