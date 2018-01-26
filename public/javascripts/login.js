/**
 * @fileOverview
 * @author ISS
 */
$(function () {
  $('#sss').on('click', function (){
    var username = $('#username').val();
    var password = $('#password').val();
    var msg = {"username": username, "password": password};
    $.ajax({
      url: './users/login',
      type: 'post',
      data: msg,
      success: function (data, status) {
        if (typeof data === 'string') {
          alert(data)
        } else {
          //location.href = '/users/detail?userName=' + data.userName;
          location.href = '/users/list';
        }
        window.localStorage.setItem('userName', data.userName);
        document.cookie = "userName=" + data.userName;
      },
      error: function (data, err) {

      }
    });
  })
});