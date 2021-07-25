const mongoose = require("mongoose");


// create database 
mongoose.connect("mongodb://localhost:27017/citydynamic", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successfull")
}).catch((error) => {
    console.log(error)

})