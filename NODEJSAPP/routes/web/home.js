var express = require("express");
var bodyParser = require('body-parser');
var database = require("../../database.js");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

/*HOME PAGE*/
router.get("/", function(req, res){
    //  console.log("basic view");
    let query = 'Select vid From cpp Limit 4';

    database.query(query, function (error, results) {
      if(error) throw error;
  
      res.render("home/", {data: results});
    });  
      
  });
  
router.get("/home", function(req, res){

  database.query('Select vid From cpp Limit 4', function (error, results) {
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
router.post("/login/user", function(req, res){
  let val = req.body;
  let userName = val.userName;
  let userPassword = val.userPassword;
  let query = 'Select * From user where uname=? AND upassword=?'

  database.query(query, [userName, userPassword], function(error, data){
    if(error) {
      throw error;
    }
    else if ( data.length > 0){
      res.end('login successfully');
    }
    else{
      res.end('login unsuccessfully');
    }
  })
});

module.exports = router;