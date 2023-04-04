const express = require("express");
const router = express.Router();
const userSchema = require("../models/usuario");
const { error } = require("console");

module.exports = router; 

//get usuario
router.get("/usuarios", (req, res)=>{
    userSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get un usuario
router.get("/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create user
router.post("/usuarios", (req, res)=>{
    const user = userSchema(req.body);
    user
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update user
router.put("/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, usuario, password, rol} = req.body;
    userSchema
        .updateOne({_id:id},{$set:{nombre, usuario, password, rol}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});


router.delete("/usuarios/:id", (req, res)=>{
    const {id} = req.params;
    userSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

