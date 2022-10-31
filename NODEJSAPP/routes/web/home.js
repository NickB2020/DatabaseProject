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

router.get("/cpp", function(req, res){

  database.query("Select vid From video WHERE type = 'cpp' Limit 10", function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });

});

router.get("/java", function(req, res){

  database.query("Select vid From video WHERE type = 'java' Limit 10", function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });

});

router.get("/javascript", function(req, res){

  database.query("Select vid From video WHERE type = 'javascript' Limit 10", function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });

});

router.get("/sql", function(req, res){

  database.query("Select vid From video WHERE type = 'sql' Limit 10", function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });

});

router.get("/asp", function(req, res){

  database.query("Select vid From video WHERE type = 'asp' Limit 10", function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });

});

router.get("/python", function(req, res){

  database.query("Select vid From video WHERE type = 'python' Limit 10", function (error, results) {
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