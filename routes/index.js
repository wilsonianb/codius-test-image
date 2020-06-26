var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const successObj = {
    imageUploaded: true
  }
  res.json(successObj)
});

router.get('/healthz', function(req, res, next) {
  res.status(200).end()
});

module.exports = router;
