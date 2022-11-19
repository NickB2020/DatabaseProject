const express = require("express");
const session = require("express-session");
const filestore = require("session-file-store")(session);
const path = require("path");
const moment = require("moment");
/*
var cookieparser = require("cookie-parser");
var session = require("express-session");
var flash = require("connect-flash");
*/


//var routes = require("./routes");


var app = express();


app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use((req, res, next)=>{
    res.locals.moment = moment;
    next();
});
  
app.use(session({
  name: "session-id",
  secret: "supersecretcode", // Secret key,
  saveUninitialized: false,
  resave: false,
  store: new filestore()
}))

app.use("/", require("./routes/web"));
app.use("/api", require("./routes/api"));



app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get("port"),function(){
    console.log("Server started on port " + app.get("port"));
});
