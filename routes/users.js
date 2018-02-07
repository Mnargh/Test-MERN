var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  const team = [{ id: 1, name: "Varun"},
  {id: 2, name: "Tom"},
  {id: 3, name: "Charles"},
  {id: 4, name: "Umair"}];

  res.json(team);
});

module.exports = router;
