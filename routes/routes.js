const express = require("express");
const home = require("../controllers/user.controller");

const router = express.Router();

//home route
router.get("/", home);

module.exports = router;
