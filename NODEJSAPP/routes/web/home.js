var express = require("express");

var router = express.Router();

router.get("/", function(req,res){
    //  console.log("basic view");
      res.render("home/");
      
  });
  
  router.get("/home", function(req,res){
      res.render("home/");
      
  });

  router.get("/login", function(req,res){
      res.render("home/login");
      
  });

  router.get("/signup", function(req,res){
    res.render("home/signup");
    
  });

  module.exports = router;