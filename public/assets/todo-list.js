$(document).ready(function () {

	$('form').on('submit', function (e) {
		e.preventDefault();
		var item = $('form input');
		var todo = {
			item: item.val()
		};
		$.ajax({
			type: 'POST',
			url: '/todo',
			data: todo,
			success: function (data) {

				console.log(data);
				location.reload();
			}
		});

		return false;

	});

	$('li').on('click', function (e) {
		e.preventDefault();
		var item = $(this).text().trim().replace(/ /g, "-");
		console.log("item" + item);
		$.ajax({
			url: '/todo/' + item,
			cache: false,
			contentType: false,
			processData: false,
			type: 'DELETE',
			success: function (data) {
				location.reload();
			}
		});
	});
});