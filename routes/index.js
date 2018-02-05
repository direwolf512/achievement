var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(typeof req.headers.cookie)
  if (req.headers.cookie.indexOf('userName=') > 0) {
    var userName = req.headers.cookie.split('userName=')[1].split(';')[0];
    if (userName !== 'null') {
      res.redirect('users/detail?userName=' + userName);
    } else {
      res.render('index', {title: '首页'});
    }
  } else {
    res.render('index', {title: '首页'});
  }
});

/* 注册 */
router.post('/register', function (req, res, next) {
  var msg = req.body;
  var _data = {
    "userName": msg.username,
    "data": msg
  };
  var dataArr = [];
  fs.readFile('./files/user.json', 'utf-8', function (err, data) {
    if (data) {
      dataArr = JSON.parse(data);
    } else {
      dataArr = [];
    }
    dataArr.push(_data);
    fs.writeFile('./files/user.json', JSON.stringify(dataArr), 'utf-8', function (err, data) {
      console.log('register');
    });
  });
  res.send('post login success！');
});

/* 登录 */
router.post('/login', function (req, res, next) {
  var msg = req.body;
  var _data = {
    "userName": msg.username,
    "data": msg
  };
  var usernameArr = [];
  var dataArr = [];
  fs.readFile('./files/user.json', 'utf-8', function (err, data) {
    if (data) {
      dataArr = JSON.parse(data);
    } else {
      dataArr = [];
    }
    for (var j = 0; j < dataArr.length; j++) {
      usernameArr.push(dataArr[j].userName);
    }
    if (usernameArr.indexOf(_data.userName) === -1) {
      res.send('用户名不存在');
    } else {
      for (var i = 0; i < dataArr.length; i++) {
        if (dataArr[i].userName === _data.userName && dataArr[i].data.password === _data.data.password) {
          res.send(_data);
        } else if (dataArr[i].userName === _data.userName && dataArr[i].data.password !== _data.data.password) {
          res.send('密码错误');
        }
      }
    }
  });

});

router.get('/login', function (req, res, next) {
  res.render('login', {});
});

router.get('/register', function (req, res, next) {
  res.render('register', {});
});


module.exports = router;
