var express = require("express");

var router = express.Router();

router.use("/", require("./home"));

router.use("/", require("./login"));

router.use("/", require("./add"));

router.use("/", require("./search"));

module.exports = router;