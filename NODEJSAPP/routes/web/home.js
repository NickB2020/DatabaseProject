var express = require("express");
var database = require("../../database.js");
var router = express.Router();

/*HOME PAGE*/
router.get("/", function(req, res){

    database.query('Select vid From video Limit 10', function (error, results) {
      if(error) throw error;
  
      res.render("home/", {data: results});
    });
      
});
  
router.get("/home", function(req, res){

  database.query('Select vid From video Limit 10', function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });

});

/* LOGIN PAGE */
router.get("/login", function(req, res){
    res.render("home/login");
    
});

router.get("/signup", function(req, res){
  res.render("home/signup");
  
});

/* USER PAGE */

module.exports = router;