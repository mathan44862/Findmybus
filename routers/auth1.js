const express = require("express");
const userController = require("../controllers/user1");
const router = express.Router();
router.post("/login",userController.login);
module.exports=router