var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/getusers', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/getuserssss', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
