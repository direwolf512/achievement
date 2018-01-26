var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var userName = req.headers.cookie.split('userName=')[1].split(';')[0];
  if (userName !== 'null') {
    res.redirect('users/detail?userName='+ userName);
  } else {
    res.render('index', { title: '首页' });
  }
});

router.get('/login', function(req, res, next) {
  res.render('login', {});
});

router.get('/register', function(req, res, next) {
  res.render('register', {});
});


module.exports = router;
