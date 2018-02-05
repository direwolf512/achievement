var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var add = require('./routes/add');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views')); //设定查找目录
app.set('view engine', 'ejs'); //设定模板为ejs，匹配时不需要加扩展名

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); //use是express注册中间件的方法。
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); //解析请求主体
app.use(express.static(path.join(__dirname, 'build'))); //提供./build下的静态文件（默认为./public）

app.use('/', index);
app.use('/users', users);
app.use('/add', add);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
