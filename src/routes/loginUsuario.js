const Router = require("express");
const { Usuario } = require("../db.js");
const jwt = require("jsonwebtoken");
const router = Router();
const {SECRET_KEY}= process.env;

router.post("/", async(req,res)=> {
try {
    const {usuario, contraseña} = req.body;

    const validate = await Usuario.findOne({where: {usuario}})
    if(!validate){
        return res.send({mensaje: "el usuario no existe"});
    }
    if(validate.contraseña!==contraseña){
        return res.send({mensaje: "la contraseña no es valida"});
    }

    jwt.sign({validate}, SECRET_KEY, {expiresIn: '1h'}, (error, token)=>{
        if(error) {
            return res.send({mensaje: error});
        }else {
            return res.send({mensaje: token});
        }
    })
    
} catch (error) {
    res.send(error);;
}
})

module.exports = router
