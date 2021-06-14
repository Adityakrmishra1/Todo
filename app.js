var express = require('express');
var todo = require('./controller/todo-controller');

var app = express();

// setting template engine 

app.set('view engine', 'ejs');

//static file
app.use(express.static('public'));
app.use(express.urlencoded({
	extended: true
}));
//listen to port
app.listen(3000);

console.log('we are lising at 3000');

// fire controller
var todocontroller = todo.todocontroller;
todocontroller(app);