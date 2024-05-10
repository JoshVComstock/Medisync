const express = require("express");
const { userController } = require("../controllers/logued/createUser");
const { Logincontroller } = require("../controllers/logued/login");
const router = express.Router();

//logued
router.post("/login", Logincontroller);

// gestionar user
router.post("/crate-user", userController.createUser);
router.get("/user", userController.getUser);

module.exports = router;
