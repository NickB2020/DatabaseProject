var express = require("express");
var bodyParser = require('body-parser');
var database = require("../../database.js");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

router.post("/search", function(req, res){
    let val = req.body;

    database.query('SELECT * FROM video where type = ?;', [val.videoType], function (error, results) {
      if(error) throw error;

      res.render('home/admin', {data: results});
    })
    
    //res.redirect('/admin'); // after fix auth system should use this to prevent resubmit (post/redir/get)
});

module.exports = router;