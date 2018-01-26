/**
 * @fileOverview
 * @author ISS
 */
$(function () {
  $('#sss').on('click', function (){
    var username = $('#username').val();
    var passwordF = $('#passwordF').val();
    var passwordS = $('#passwordS').val();
    var usernameArr = [];
    var _data = null;
    $.ajax({
      url: './users/usersArr',
      type: 'get',
      success: function (data, status) {
        _data = data;
        if (_data) {
          _data = JSON.parse(_data);
        }
        for (var i = 0; i < _data.length; i++) {
          usernameArr.push(_data[i].userName);
        }
        if (usernameArr.indexOf(username) !== -1) {
          alert('该用户名已被注册');
        } else {
          if(passwordF !== passwordS){
            $("#passwordF").css("border","1px solid red");
            $("#passwordS").css("border","1px solid red");
          }else if(passwordF === passwordS) {
            var msg = {"username": username, "password": passwordF};
            $.ajax({
              url: './register',
              type: 'post',
              data: msg,
              success: function (data, status) {
                if (status == 'success') {
                  location.href = '/';
                }
              },
              error: function (data, err) {
                location.href = '/register';
              }
            });
          }
        }
      },
      error: function (data, err) {
        location.href = 'register';
      }
    });
  })
});