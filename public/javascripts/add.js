/**
 * @fileOverview
 * @author ISS
 */
$(function () {
  $('#sss').on('click', function () {
    var title = $('#title').val(),
        msg = $('#msg').val(),
        keyword = $('#keyword').val(),
        creatAt = new Date().getTime(),
        userName = window.localStorage.getItem('userName');
    var data = {
      title: title,
      msg: msg,
      keyword: keyword,
      creatAt: creatAt,
      userName: userName
    };
    if (title !== '' && msg !== '' && keyword !== '') {
      $.ajax({
        url: './add/msg',
        type: 'post',
        data: data,
        success: function (data, status) {
          if (data === 'ok') {
            location.href = '/users/detail?userName=' + userName;
          }
        },
        error: function (data, err) {

        }
      });
    } else {
      alert('内容不完整');
    }
  })
});