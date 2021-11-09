var express = require("express");
var router = express.Router();
const ccxt = require("ccxt");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(ccxt.exchanges);
});

module.exports = router;
