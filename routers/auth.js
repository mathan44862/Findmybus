const express = require("express");
const userController = require("../controllers/user1");
const router = express.Router();
router.post("/register",userController.register);
router.post("/admin",userController.admin);
module.exports=router