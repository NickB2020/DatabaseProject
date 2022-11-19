const express = require("express");
const database = require("../../database.js");
const router = express.Router();

/*HOME PAGE*/
router.get("/", function(req, res){
  res.redirect("/home");
});
  
router.get("/home", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video"

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

router.get("/cpp", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video WHERE type = 'cpp';";

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

router.get("/java", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video WHERE type = 'java';";

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

router.get("/javascript", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video WHERE type = 'javascript';";

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

router.get("/sql", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video WHERE type = 'sql';";

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

router.get("/asp", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video WHERE type = 'asp';";

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

router.get("/python", function(req, res){
  let pageNum = req.query.page;
  let query = "Select vid From video WHERE type = 'python';";

  database.query(query, function (error, results) {
    if(error) {
      throw error;
    }

    let pager = {}; // records pager
      
    pager.maxRecord = results.length; // total records from database
    pager.pageSize = 5; // records per page
    pager.pageCount = parseInt(Math.ceil(pager.maxRecord / pager.pageSize)); // number of pages in total
    pager.pageCurrent = pageNum || 1; // default current page

    // (0, 20) (20, 40) (40, 80) ... 
    let dataList = results.slice((pager.pageCurrent - 1) * pager.pageSize, (pager.pageCurrent - 1) * pager.pageSize + pager.pageSize);

    res.render('home/', {
      data: dataList,
      pager: pager
    });
  });

});

/* LOGIN PAGE */
router.get("/login", function(req, res){
    res.render("home/login");
});

router.get("/signup", function(req, res){
  res.render("home/signup");
});

module.exports = router;