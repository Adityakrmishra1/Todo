var data = [{
		item: 'item1'
	}, {
		item: 'item2'
	}, {
		item: 'item3'
	},
	{
		item: 'item4'
	},
	{
		item: 'item5'
	}
];


module.exports = {
	todocontroller: function (app) {
		app.get('/todo', function (req, res) {
			res.render('todo', {
				todos: data
			});
		});
		app.get('/about', function (req, res) {
			res.send('HELLO');
		});
		app.post('/todo', function (req, res) {
			// console.log(req);
			data.push(req.body);
			res.send(data);
			console.log(data);

		});
		app.delete('/todo/:item', function (req, res) {
			console.log(JSON.stringify("delete" + req.params.item));
			data = data.filter(i => i.item != req.params.item);
			res.send(data);
		});
	}
};