var bodyParser = require('body-parser');
// var urlencodedParser = bodyParser.urlencoded({
// 	extended: false
// });


var data = [{
		item: 'aditya mishra'
	}, {
		item: 'fuck big ass.... '
	}, {
		item: 'fuck some more big ass...'
	},
	{
		item: 'Fucking is awesome..........'
	},
	{
		item: 'Fuck some tities..........'
	}
];


module.exports = {
	todocontroller: function (app) {
		app.get('/todo', function (req, res) {
			res.render('todo', {
				todos: data
			});
		});
		app.post('/todo', function (req, res) {

			console.log("todo-conto;" + JSON.stringify(req.body));

			data.push(req.body);
			res.send(data);

		});
		app.delete('/todo', function (req, res) {

		});
	}
};