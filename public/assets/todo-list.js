$(document).ready(function () {

	$('form').on('submit', function (e) {
		e.preventDefault();
		console.log('adityal kumar mishra');
		var item = $('form input');
		var todo = {
			item: item.val()
		};
		console.log(todo);

		$.ajax({
			type: 'POST',
			url: '/todo',
			data: todo,
			success: function (data) {

				console.log(data);
				// location.reload();
			}
		});

		return false;

	});
});