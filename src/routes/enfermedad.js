const express = require("express");
const router = express.Router();
const enfermedadSchema = require("../models/enfermedad");
const { error } = require("console");

module.exports = router; 

//get usuario
router.get("/enfermedades", (req, res)=>{
    enfermedadSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get una enfermedad
router.get("/enfermedades/:id", (req, res)=>{
    const {id} = req.params;
    enfermedadSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create enfermedad
router.post("/enfermedades", (req, res)=>{
    console.log(req.body);
    const enfermedad = enfermedadSchema(req.body);
    enfermedad
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update enfermedad
router.put("/enfermedades/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, observaciones, estado} = req.body;
    enfermedadSchema
        .updateOne({_id:id},{$set:{nombre, observaciones, estado}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//delete enfermedad
router.delete("/enfermedades/:id", (req, res)=>{
    const {id} = req.params;
    enfermedadSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});
