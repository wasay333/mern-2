const express = require('express')
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoutes =require('./Routes/user.route.js');
const authRoutes =require('./Routes/auth.route.js');
const app = express()
app.use(express.json());

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
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);