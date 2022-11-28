var openidResponses = require("../responses/openidResponses");
var express = require("express");
var router = express.Router();

router.post("/token", (req, res, next) => {
  console.log("#######\n /token called:");
  var message = req.body;
  var authHeader = req.headers.authorization;
  var sent = Object.assign({ Authorization: authHeader }, message);
  var validToken = openidResponses.validToken;

  console.log(JSON.stringify(sent, null, 3));
  res.json(validToken).end();
});

var jwkHandler = (req, res, next) => {
  console.log("#######\n /jwts called:");
  var jwk = openidResponses.jwk;
  console.log(JSON.stringify(jwk, null, 3));
  res.json(jwk).end();
};
router.get("/jwk", jwkHandler);
router.get("/certs", jwkHandler);

module.exports = router;
