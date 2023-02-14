const express = require("express");
const userController = require("../controllers/user1");
const router = express.Router();
router.get("/busroute/:no",userController.busroute);

router.get("/bookticket/:no/:time",userController.bookticket);

router.post("/pay",userController.pay);
router.post("/admincheck",userController.admincheck);
module.exports=router