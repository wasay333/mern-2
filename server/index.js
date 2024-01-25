const express = require('express')
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("Pinged your deployment. You successfully connected to MongoDB!")
}
).catch((err)=>{
    console.error(err)
}
)
app.listen(3000, ()=>{
console.log("server is running on port 3000")
}
)