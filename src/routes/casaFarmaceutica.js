const express = require("express");
const router = express.Router();
const casaFarmaceuticaSchema = require("../models/casaFarmaceutica");
const { error } = require("console");

module.exports = router; 

//get usuario
router.get("/casaFarmaceutica", (req, res)=>{
    casaFarmaceuticaSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get una enfermedad
router.get("/casaFarmaceutica/:id", (req, res)=>{
    const {id} = req.params;
    casaFarmaceuticaSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create enfermedad
router.post("/casaFarmaceutica", (req, res)=>{
    console.log("servicio")
    const casaFarmaceutica = casaFarmaceuticaSchema(req.body);
    casaFarmaceutica
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update enfermedad
router.put("/casaFarmaceutica/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, observaciones} = req.body;
    casaFarmaceuticaSchema
        .updateOne({_id:id},{$set:{nombre, observaciones}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//delete enfermedad
router.delete("/casaFarmaceutica/:id", (req, res)=>{
    const {id} = req.params;
    casaFarmaceuticaSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

