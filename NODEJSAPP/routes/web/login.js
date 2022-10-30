var express = require("express");
var bodyParser = require('body-parser');
var database = require("../../database.js");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

router.post("/admin", function(req, res){
    let val = req.body;
    let userName = val.userName;
    let userPassword = val.userPassword;
    let query = 'Select * From user where uname=? AND upassword=?'

    database.query(query, [userName, userPassword], function(error, data){
      if(error) {
        throw error;
      }
      else if ( data.length > 0){
        let query = 'SELECT * FROM video;';
  
        database.query(query, function (error, results) {
          if(error) throw error;

          res.render('home/admin', {data: results});
        })

        //res.redirect('/admin'); // after fix auth system should use this to prevent resubmit (post/redir/get)
      }
      else{
        res.end('login unsuccessfully, please return');
      }
    })
  });

  module.exports = router;