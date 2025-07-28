var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  fetch('https://api.jikan.moe/v4/seasons/now')
    .then(response => {
      return response.json();
    })
    .then(data => {
      res.json(data)
    })
});

module.exports = router;
