const express = require("express");
const router = express.Router();
const farmacoSchema = require("../models/farmaco");
const { error } = require("console");

module.exports = router; 

//get usuario
router.get("/farmaco", (req, res)=>{
    farmacoSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get una enfermedad
router.get("/farmaco/:id", (req, res)=>{
    const {id} = req.params;
    farmacoSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create enfermedad
router.post("/farmaco", (req, res)=>{
    const efectoAdverso = farmacoSchema(req.body);
    efectoAdverso
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update enfermedad
router.put("/farmaco/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, observaciones} = req.body;
    farmacoSchema
        .updateOne({_id:id},{$set:{nombre, observaciones}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//delete enfermedad
router.delete("/farmaco/:id", (req, res)=>{
    const {id} = req.params;
    farmacoSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

