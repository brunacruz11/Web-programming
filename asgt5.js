// variables
var arr = ["rock", "paper", "scissors", "spock", "lizard"];
var result = {
	"wins": 0,
	"ties":0,
	"losses": 0, 
	"outcome": 0
};

var http = require('http');
var url = require('url');


var play = function(playerMove) {
	var rand = Math.floor(Math.random() * arr.length);
	var computerMove = arr[rand];

	if(playerMove === computerMove) {
		result.ties = result.ties + 1;

	} else if (playerMove === "rock") {
		if ( (computerMove === "lizard") || (computerMove === "scissors") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "paper") {
		if( (computerMove === "rock" || (computerMove === "spock") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "scissors") {
		if ( (computerMove === "paper") || (computerMove === "lizard") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "spock") {
		if ( (computerMove === "scissors") || (computerMove === "rock") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else if (playerMove === "lizard") {
		if ( (computerMove === "spock") || (computerMove = "paper") ) {
			result.wins = result.wins + 1;
			return "win";
		} else {
			result.losses = result.losses + 1;
			return "loss";
		}

	} else {
		return "invalid option";
	}
}

function load (req, res) {
	"use strict";

	var path = url.parse(req.url).pathname;
	var path = path.split("/");
	res.writeHead(200, { 'Content-Type' : 'application/json' });
	var output = play(split[2]);
	res.write(JSON.stringify(output));
	res.end();
}

http.createServer(load).listen(7777);







