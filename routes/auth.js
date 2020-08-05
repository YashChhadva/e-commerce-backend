const express = require("express");
const {signUp , signIn , signOut , requireSignin} = require('../controllers/auth.js');
const {userSignupValidator} = require('../validator/index.js')

const router = express.Router();

router.post("/signup" ,userSignupValidator, signUp);
router.post("/signin" ,signIn);
router.get('/signout' , signOut);

module.exports = router;

