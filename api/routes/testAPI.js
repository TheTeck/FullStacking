let express = require("express");
let router = express.Router();

router.get("/", function(req, res, next) {
    res.send(process.env.SECRET_MESSAGE);
});

module.exports = router;