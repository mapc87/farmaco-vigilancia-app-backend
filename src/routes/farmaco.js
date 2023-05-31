const express = require("express");
const farmacoSchema = require("../models/farmaco");
const router = express.Router();


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
    const farmaco = farmacoSchema(req.body);
    farmaco
        .save()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({ message:error }));
})

//update enfermedad
router.put("/farmaco/:id", (req, res)=>{
    const {id} = req.params;
    const {nombre, 
            casa,  
            efectosAdversos, 
            efectosAdversosNoReportados, 
            observaciones, 
            estado} = req.body;
    farmacoSchema
        .updateOne({_id:id},{$set:{nombre, 
                                    casa,  
                                    efectosAdversos, 
                                    efectosAdversosNoReportados,
                                    observaciones, 
                                    estado}})
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

