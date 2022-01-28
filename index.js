var express = require('express');


var todoControllers = require('./controllers/todoController');

var app = express();


//set up template engine
app.set('view engine', 'ejs');



//static files
app.use(express.static('./public'));


//fire function
todoControllers(app);

//listen to port
app.listen(8080);
console.log('you are listening to port...8080');