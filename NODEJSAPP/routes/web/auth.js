const express = require("express");
const bodyParser = require('body-parser');
const database = require("../../database.js");
const router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

router.post("/", function(req, res){
  let val = req.body;
  let userName = val.userName;
  let userPassword = val.userPassword;
  let query = 'Select * From user where uname=? AND upassword=?'

  database.query(query, [userName, userPassword], function(error, data) {
    if(error) {
      throw error;
    }
    else if ( data.length > 0){
      req.session.user = userName; // store session

      console.log(req.session.user + "logged in"); // logging

      res.redirect('/admin'); // Post-Redirect-Get
    }
    else{
      res.end('login unsuccessfully, please return');
    }
  })
});

module.exports = router;