var express = require("express");
var database = require("../../database.js");
var router = express.Router();

router.get("/admin", function(req, res){
    //  console.log("basic view");
    let query = 'Select * From cpp';

    database.query(query, function (error, results) {
      if(error) throw error;
  
      res.render("admin", {data: results});
    });  
      
});