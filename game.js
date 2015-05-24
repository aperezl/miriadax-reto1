var dice = require('./dice');
var player = require('./player');

var game = {};
//Inicialización del juego.
game.round = 1;
game.dice = dice();
game.numDices = 3;
game.prizes = [0, 15, 30]; //Se definen los multiplicadores de premio


game.players = [];
game.rollDices = function(player) {
	var numDices = game.numDices;
	var total = 0;
	while(numDices>0) {
		var max = 0;
		var hasPrize = true;
		for(var i=0; i<numDices; i++) {
			var diceResult = game.dice.roll();
			if(max>0 && diceResult!=max) {
				hasPrize = false;
			}
			if(diceResult>max) {
				max = diceResult
			}
		}
		numDices--;
		if(hasPrize && game.prizes[numDices]>0) {
			total += game.prizes[numDices];
		} else {
			total+=max;
		}
	}
	game.players[player].addPoints(total);
}
game.checkPoints = function() {
	for(var i in game.players) {
		if(game.players[i].getPoints() >= 100) {
			return true;
		}
	}
	return false;
}

game.players.push(player('Jugador 1', 0));
game.players.push(player('Computadora', 0));

while(!game.checkPoints()) {
	for(var i in game.players) {
		game.rollDices(i);
	}
}
console.log('Fin de juego');




