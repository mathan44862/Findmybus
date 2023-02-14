const express = require("express");
const userController = require("../controllers/user1");
const router = express.Router();
router.post("/bus",userController.bus);
module.exports=router