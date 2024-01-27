const express = require("express")
const router = express.Router();
const SignUp = require("../Controller/auth.controller.js")
router.post('/signup', SignUp
);


module.exports = router;