var express = require("express");
var database = require("../../database.js");

var router = express.Router();

router.get("/", function(req,res){
    //  console.log("basic view");
    let query = 'Select vid From cpp Limit 4';

    database.query(query, function (error, results) {
      if(error) throw error;
  
      res.render("home/", {data: results});
    });  
      
  });
  
router.get("/home", function(req,res){
  database.query('Select vid From cpp Limit 4', function (error, results) {
    if(error) throw error;

    res.render("home/", {data: results});
  });   
});

router.get("/login", function(req,res){
    res.render("home/login");
    
});

router.get("/signup", function(req,res){
  res.render("home/signup");
  
});

module.exports = router;