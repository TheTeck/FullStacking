let express = require("express");
let router = express.Router();
let testAPICtrl = require("../controllers/testAPI");

router.get("/", testAPICtrl.show);

module.exports = router;