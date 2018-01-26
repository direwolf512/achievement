/**
 * @fileOverview
 * @author ISS
 */
$(function () {
		var title, msg, keyword,
				id = window.location.search.split('id=')[1].split('&')[0],
				userName = window.location.search.split('userName=')[1];
		$('#sss').on('click', function () {
				title = $('#title').val();
				msg = $('#msg').val();
				keyword = $('#keyword').val();
				var data = {
						title: title,
						msg: msg,
						keyword: keyword,
						userName: userName,
						id: id
				};
				if (title !== '' && msg !== '' && keyword !== '') {
						$.ajax({
								url: './editor',
								type: 'post',
								data: data,
								success: function (data, status) {
										if (data === 'ok') {
												location.href = '/users/detail?userName=' + userName;
										}
										console.log(data)
								},
								error: function (data, err) {
										console.log(err)
								}
						});
				} else {
						alert('内容不完整');
				}
		})
});