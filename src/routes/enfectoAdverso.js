const express = require("express");
const router = express.Router();
const efectoAdversoSchema = require("../models/efectosAdversos");
const { error } = require("console");

module.exports = router; 

//get usuario
router.get("/efectoAdverso", (req, res)=>{
    efectoAdversoSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get una enfermedad
router.get("/efectoAdverso/:id", (req, res)=>{
    const {id} = req.params;
    efectoAdversoSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create enfermedad
router.post("/efectoAdverso", (req, res)=>{
    const efectoAdverso = efectoAdversoSchema(req.body);
    efectoAdverso
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update enfermedad
router.put("/efectoAdverso/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, observaciones, estado} = req.body;
    efectoAdversoSchema
        .updateOne({_id:id},{$set:{nombre, observaciones, estado}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//delete enfermedad
router.delete("/efectoAdverso/:id", (req, res)=>{
    const {id} = req.params;
    efectoAdversoSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

