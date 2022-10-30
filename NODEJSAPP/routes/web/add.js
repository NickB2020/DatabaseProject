var express = require("express");
var bodyParser = require('body-parser');
var database = require("../../database.js");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

router.post("/add", function(req, res){
    let val = req.body;
    let queryInsert = 'INSERT INTO video VALUE (?,?,?,?,?,?,?)';

    database.query(queryInsert, 
      [val.videoId, val.videoType, val.videoName, val.viewCount, val.likeCount, val.publishDate, val.duration], 
      function(error, data){

      if(error) throw error;

    })

    database.query('SELECT * FROM video;', function (error, results) {
      if(error) throw error;

      //res.redirect('/admin'); // after fix auth system should use this to prevent resubmit (post/redir/get)
      res.render('home/admin', {data: results});
      
    })
      
});

module.exports = router;