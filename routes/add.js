/**
 * @fileOverview
 * @author ISS
 */
var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('add', { title: '添加页' });
});

router.post('/msg', function(req, res, next) {
  var msg = req.body;
  var _data = {
    "title": msg.title,
    "msg": msg.msg,
    "keyword": msg.keyword,
    "creatAt": msg.creatAt,
    "userName": msg.userName
  };
  var dataObj = {};
  fs.readFile('./files/' + _data.userName + '.json', 'utf-8', function (err, data) {
    if (data) {
      dataObj = JSON.parse(data);
    } else {
      dataObj = {
        creatAtArr: []
      };
    }
    dataObj[_data.creatAt] = _data;
    dataObj.creatAtArr.push(_data.creatAt);
    fs.writeFile('./files/' + _data.userName + '.json', JSON.stringify(dataObj), 'utf-8', function (err, data) {
      console.log('add');
    });
  });
  res.send('ok');
});

module.exports = router;