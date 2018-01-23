/**
 * @fileOverview
 * @author ISS
 */
$(function () {
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
  $('#logOut').on('click', function () {
    window.localStorage.setItem('userName', '');
  });
});