let express = require('express');


let todoControllers = require('./controllers/todoController');

let app = express();


//set up template engine
app.set('view engine', 'ejs');



//static files
app.use(express.static(__dirname + '/public/'));




//fire function
todoControllers(app);

//listen to port
app.listen(8080);
console.log('you are listening to port...8080');