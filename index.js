const express = require("express");
const app = express();
const path = require("path");
const hbs = require('hbs');
const exphs = require("express-handlebars");
var fs = require('fs');

//require file for database
const db = require("./config/db.js");
db.connect( (error) => {
	if(error){
		console.log(error);
	}else{
		console.log("Database Connection Established");
	}
});

//setting directory for CSS & JS Files for views
const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));

//parsing url encoded bodies
app.use(express.urlencoded({extended: false}));
app.use(express.json());
//app.use(cookieParser());

//setting view engine for html pages
// app.engine("handlebars",exphs({
// 	defaultLayout:'',
// 	layoutsDir: path.join(__dirname,"views/layouts")
// }));
hbs.registerPartials(__dirname + '/views/partials');

// set the view engine to use handlebars
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
//app.set("view engine", "handlebars");

//defining router here
app.use('/', require('./routes/route'));
app.use('/login', require('./routes/route'));

app.listen(1850, () => {
	console.log("Server gets started on 1850 Port");
});