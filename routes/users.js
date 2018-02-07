var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users')

/* GET users listing. */
router.get('/', function(req, res, next) {

  // var user = new User({ name: "Harry" });
  // user.save();

  // var user = User.findOne({name: "Tom"})
    // .then(res.send(user));


  User.find(function(err, users){
      res.send(users);
  });


  // res.send('respond with a resource');
  // const team = [{ id: 1, name: "Varun"},
  // {id: 2, name: "Tom"},
  // {id: 3, name: "Charles"},
  // {id: 4, name: "Umair"}];
  //
  // res.json(team);
});

module.exports = router;
