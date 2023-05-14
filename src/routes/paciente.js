const express = require("express");
const router = express.Router();
const pacienteSchema = require("../models/paciente");
const { error } = require("console");

module.exports = router; 

//get farmaceutica
router.get("/paciente", (req, res)=>{
    pacienteSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//get una farmaceutica
router.get("/paciente/:id", (req, res)=>{
    const {id} = req.params;
    pacienteSchema
        .findById(id)
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//create farmaceutica
router.post("/paciente", (req, res)=>{
    const paciente = pacienteSchema(req.body);
    paciente
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update casa farmaceutica
router.put("/paciente/:id", (req, res)=>{
    const {id} = req.params;
    const {
            deptoNacimiento, 
            deptoResidencia, 
            direccion, 
            dpi, 
            etnia, 
            fechaIngreso, 
            municipioNacimiento,
            municipioResidencia,
            noRegistro, 
            nombre, 
            nombreEncargado, 
            sexo, 
            telefono, 
            telefonoEncargado,
            estado, 
            observaciones,
            datosClinicos
        } = req.body;
    pacienteSchema
        .updateOne({_id:id},{$set:{
            deptoNacimiento, 
            deptoResidencia, 
            direccion, 
            dpi, 
            etnia, 
            fechaIngreso, 
            municipioNacimiento,
            municipioResidencia,
            noRegistro, 
            nombre, 
            nombreEncargado, 
            sexo, 
            telefono, 
            telefonoEncargado,
            estado, 
            observaciones,
            datosClinicos
        }})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

//delete farmaceutica
router.delete("/paciente/:id", (req, res)=>{
    const {id} = req.params;
    pacienteSchema
        .findOneAndRemove({_id:id})
        .then((data)=> res.json(data))
        .catch((error) => res.json({message: error}))
});

