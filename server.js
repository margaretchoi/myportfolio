// Starting point for the Node/Express server.
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");

// Initiate express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routing
app.use(express.static("app/public"));

app.get(
	"/", function(req, res) {
		res.sendFile(path.join(__dirname + '/index.html'));
	});

app.get(
	"/portfolio", function(req, res) {
		res.sendFile(path.join(__dirname + '/app/public/html/portfolio.html'));
	});

app.get(
	"/contact", function(req, res) {
		res.sendFile(path.join(__dirname + '/app/public/html/contact.html'));
	});

// app.post();

// app.post("/api/new", function(req, res) {
// 	console.log(req.body);
// });

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});