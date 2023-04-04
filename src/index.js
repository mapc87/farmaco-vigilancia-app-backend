const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/usuario");

require("dotenv").config();
const app = express();
const port = process.env.PORT || 3000;

//middleware
app.use(express.json());
app.use("/api",userRoutes);

mongoose.connect(
    process.env.MONGODB_URI
).then (()=> {
    console.log("connected to mongodb atlas");
}).catch((error)=>{
    console.error(error);
});

app.listen(port,()=> {
    console.log("server listen on port", port)
})

