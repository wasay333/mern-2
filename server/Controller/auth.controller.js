const User= require('../Model/user.model.js');
const bcryptjs = require('bcryptjs');

const SignUp = async(req, res) => {
const {username, email , password}=req.body
if (!username || !email || !password || username === "" || email ==="" || password ==="" ){
return res.status(404).json({Message:"emplt feilds"})
}
const hashedPassword = bcryptjs.hashSync(password, 10);
const newUser =new User({
  username,
  email,
  password:hashedPassword
})
try {
  await newUser.save()
  res.json("signUp SuccessFul")
} catch (error) {
  res.status(500).json({message: error.message})
}
};
module.exports= SignUp;