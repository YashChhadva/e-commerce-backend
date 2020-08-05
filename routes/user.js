const express = require("express");
const {userById} = require('../controllers/user.js');
const {userSignupValidator} = require('../validator/index.js')

const router = express.Router();

router.param("userid" , userById);

module.exports = router;

