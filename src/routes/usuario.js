const express = require("express");
const router = express.Router();
const usuarioSchema = require("../models/usuario");
const { error } = require("console");

module.exports = router; 

//get usuario
router.get("/usuarios", (req, res)=>{
    usuarioSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get un usuario
router.get("/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    usuarioSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create user
router.post("/usuarios", (req, res)=>{
    const user = usuarioSchema(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update user
router.put("/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, usuario, password, rol, estado} = req.body;
    usuarioSchema
        .updateOne({_id:id},{$set:{nombre, usuario, password, rol, estado}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});


router.delete("/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    usuarioSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

