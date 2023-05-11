const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose");
const userRoutes = require("./routes/usuario");
const enfermedadRoutes = require("./routes/enfermedad");
const casaFarmaceuticaRoutes = require("./routes/casaFarmaceutica");
const efectoAdversoRoutes = require("./routes/enfectoAdverso");
const farmacoRoutes = require("./routes/farmaco");



require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

//middleware
app.use(express.json());
app.use("/api",userRoutes);
app.use("/api",enfermedadRoutes);
app.use("/api",casaFarmaceuticaRoutes);
app.use("/api",efectoAdversoRoutes);
app.use("/api",farmacoRoutes);

mongoose.connect(
    process.env.MONGODB_URI
    //'mongodb://0.0.0.0:27017/farmacoVigilanciaApp'
).then (()=> {
    console.log("connected to mongodb atlas");
}).catch((error)=>{
    console.error(error);
});

app.listen(port,()=> {
    console.log("server listen on port", port)
})

