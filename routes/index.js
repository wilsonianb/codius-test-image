var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const successObj = {
    imageUploaded: true
  }
  res.json(successObj)
});

module.exports = router;
