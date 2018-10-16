const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path');
const store = require('store');
const http = require('http');

const port = process.env.PORT || 8081;

const route = require('./routes/routes');
const admin = require('./routes/admin_routes');

const app = express()

var server = http.createServer(app);
var io = require('socket.io').listen(server);

const Chat = require('./models/chat');

io.on('connection', (socket) => {
	console.log("---- client connected ----");

	// send messages on load
	Chat.find({}).populate('user_id').exec(function (err, chat) {
		io.emit('onload_chat', chat);
	})

	// send messages on every event
	sendStatus = function (data) {
		console.log('on send messages')
		io.emit('messages', data);
	}

	// get messages from the server
	socket.on('send_message', function (data) {
		new Chat({
		  user_id: data.user_id,
		  receiver_id: data.receiver_id,
		  message: data.message,
		  date: data.date,
		}).save(function(err, chat_data){
			if (!err) {
				Chat.findOne({ _id: chat_data._id, receiver_id: chat_data.receiver_id }).populate('user_id').exec(function (err, chat) {
					sendStatus(chat);
				})
		 	}
		});
	})
})



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

server.listen(port);


module.exports = app;