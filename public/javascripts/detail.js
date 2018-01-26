/**
 * @fileOverview
 * @author ISS
 */
$(function () {
  var userName = window.localStorage.getItem('userName'),
      sss = window.location.search.split('=')[1];
  if (userName !== sss) {
    $('#logOut').css('display', 'none');
    $('#addMsg').css('display', 'none');
    $('#goBackSelf').css('display', 'block');
  } else {
    $('#logOut').css('display', 'block');
    $('#addMsg').css('display', 'block');
    $('#goBackSelf').css('display', 'none');
  }
  $('#forDate').css('display', 'block');
  $('#forTitle').css('display', 'none');
  $('#forKeyword').css('display', 'none');
  $('#forDateFilter').css('background', '#eee');
  $('#forDateFilter').on('click', function () {
    $('#forDate').css('display', 'block');
    $('#forTitle').css('display', 'none');
    $('#forKeyword').css('display', 'none');
    $('#forDateFilter').css('background', '#eee');
    $('#forTitleFilter').css('background', '#ccc');
    $('#forKeywordFilter').css('background', '#ccc');
  });
  $('#forTitleFilter').on('click', function () {
    $('#forDate').css('display', 'none');
    $('#forTitle').css('display', 'block');
    $('#forKeyword').css('display', 'none');
    $('#forDateFilter').css('background', '#ccc');
    $('#forTitleFilter').css('background', '#eee');
    $('#forKeywordFilter').css('background', '#ccc');
  });
  $('#forKeywordFilter').on('click', function () {
    $('#forDate').css('display', 'none');
    $('#forTitle').css('display', 'none');
    $('#forKeyword').css('display', 'block');
    $('#forDateFilter').css('background', '#ccc');
    $('#forTitleFilter').css('background', '#ccc');
    $('#forKeywordFilter').css('background', '#eee');
  });
  /* 注销 */
  $('#logOut').on('click', function () {
    window.localStorage.setItem('userName', '');
    document.cookie = "userName=" + null + ';path=/;';
    location.href = './';
  });
  /* 返回个人主页 */
  $('#goBackSelf').on('click', function () {
    location.href = '/users/detail?userName=' + userName;
  });
});