const express = require("express");
const router = express.Router();
const casaFarmaceuticaSchema = require("../models/casaFarmaceutica");
const { error } = require("console");

module.exports = router; 

//get farmaceutica
router.get("/casaFarmaceutica", (req, res)=>{
    casaFarmaceuticaSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get una farmaceutica
router.get("/casaFarmaceutica/:id", (req, res)=>{
    const {id} = req.params;
    casaFarmaceuticaSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create farmaceutica
router.post("/casaFarmaceutica", (req, res)=>{
    console.log("servicio")
    const casaFarmaceutica = casaFarmaceuticaSchema(req.body);
    casaFarmaceutica
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update casa farmaceutica
router.put("/casaFarmaceutica/:id", (req, res)=>{
    console.log(req)
    const {id} = req.params;
    const {nombre, observaciones, estado} = req.body;
    casaFarmaceuticaSchema
        .updateOne({_id:id},{$set:{nombre, observaciones, estado}})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//delete farmaceutica
router.delete("/casaFarmaceutica/:id", (req, res)=>{
    const {id} = req.params;
    casaFarmaceuticaSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

