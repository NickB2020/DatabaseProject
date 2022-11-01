var express = require("express");
var bodyParser = require('body-parser');
var database = require("../../database.js");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

router.post("/update", function(req, res){
    let val = req.body;

    database.query("UPDATE video SET vid=?,type=?,vname=?,viewCount=?,likeCount=?,publishDate=?,duration=? WHERE vid=?", 
      [val.videoId, val.videoType, val.videoName, val.viewCount, val.likeCount, val.publishDate, val.duration, val.videoId], 
      function(error, data){

      if(error) throw error;

      console.log(val.videoId + ' updated');

    })

    database.query('SELECT * FROM video;', function (error, results) {
      if(error) throw error;

      //res.redirect('/admin'); // after fix auth system should use this to prevent resubmit (post/redir/get)
      res.render('home/admin', {data: results});
      
    })
      
});

module.exports = router;