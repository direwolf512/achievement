var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* 获取用户列表 */
router.get('/usersArr', function(req, res, next) {
  fs.readFile('./files/user.json', 'utf-8', function (err, data) {
    res.send(data);
  });
});

/* 用户详情 */
router.get('/detail', function(req, res, next) {
  var userName = req.query.userName;
  var msg = {};
  fs.readFile('./files/' + userName + '.json', 'utf-8', function (err, data) {
    if (data) {
      res.render('detail', {
        title: '个人主页',
        data: JSON.parse(data)
      });
    } else {
      res.render('detail', {
        title: '个人主页',
        data: {
          creatAtArr: []
        }
      });
    }
  });
});

/* 日记内容 */
router.get('/msg', function(req, res, next) {
  var userName = req.query.userName;
  var msg = {};
  fs.readFile('./files/' + userName + '.json', 'utf-8', function (err, data) {
    res.render('msg', {
      title: '内容',
      data: JSON.parse(data)[req.query.creatAt]
    });
  });
});

/* 用户列表 */
router.get('/list', function(req, res, next) {
  fs.readFile('./files/user.json', 'utf-8', function (err, data) {
    console.log(JSON.parse(data))
    res.render('list', {
      title: '用户列表',
      data: JSON.parse(data)
    });
  });
});

/*router.get('/login', function(req, res, next) {
 res.send('get login success！');
 });
router.all('/login', function(req, res, next) {
  res.send('accecpt get or post resquest！');
});
router.get('/html', function(req, res, next) {
  res.sendFile('/myself/self_culture/node/express_node/achievement/package.json');
});*/

module.exports = router;
