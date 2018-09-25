const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const store = require('store');

const port = process.env.PORT || 8081;

const route = require('./routes/routes');
const admin = require('./routes/admin_routes');

const app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(morgan('combined'))
app.use(bodyParser.json({limit: '50mb', extended: true}))

app.use(cors());

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/airbnb');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.use(express.static(path.join(__dirname, 'images')));
app.use(express.static(path.join(__dirname, '../public/assets')));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'views')));

app.use(route);
app.use(admin);

app.listen(port,()=>{
	console.log("Server started at port: "+ port);
});

module.exports = app;