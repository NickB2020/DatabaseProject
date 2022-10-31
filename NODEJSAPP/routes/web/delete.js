var express = require("express");
var bodyParser = require('body-parser');
var database = require("../../database.js");
var router = express.Router();

router.use(bodyParser.urlencoded({ extended : true }));

router.post("/delete", function(req, res){
    let val = req.body;
    let query = 'DELETE FROM video WHERE vid = ?';

    database.query(query, [val.videoId], function(error, data){
      if(error) throw error;

      console.log(val.videoId + ' deleted');

    })

    database.query('SELECT * FROM video;', function (error, results) {
      if(error) throw error;

      //res.redirect('/admin'); // after fix auth system should use this to prevent resubmit (post/redir/get)
      res.render('home/admin', {data: results});
      
    })
      
});

module.exports = router;