var express = require("express");
var path = require("path");
var favicon = require("serve-favicon");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
// подлючаем Базу данных к серверу
require("./api/models/db");
var index = require("./routes/index");
//подключаем роутеры Api (с помощью его нужно работать с БД)
var indexApi = require("./api/routes");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "dist/views"));
app.set("view engine", "pug");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./dist")));

app.use("/", index);
app.use("/api", indexApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// ошибка 500 значит что где ошибка не сервере, т е ошибка может быть в pug, в js или где нибудь еще.
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
