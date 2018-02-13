// index.js: The file containing the logic for the course of the game,
//  which depends on Word.js and:
var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require('inquirer');


// // array of words to be guessed
var wordArray = ["poodle", "dachshund", "retriever", "pitbull", "terrier", "coonhound", "huskie"];
var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
// var rw = randomWord.split('');

//Counter
var wins = 0;
var guessesRemaining = 13;
var guessesSoFar = [];

//Use Inquirer to have user start the game
	inquirer.prompt([
	 {
	    type: 'confirm',
	    name: 'start',
	    message: 'Do you want to start playing hangman?',
	    default: true
	  }
	])
	.then(answers => {
		//If user wants to start the game
		if (answers.start){
			console.log("Let's play!");
			console.log("-----------------------------------------");
			console.log("SELECT A LETTER... One at a time, please.");
			//will run start game function.
			//startGame();
		}

		else {
			//If user doesn't want to play
			console.log("See ya!!");
			return;
		}
	});



//Using inquirer to ask user if they want to play another game
//This function will be called when a game is over
function playAgain() {
	inquirer.prompt([
	 {
	    type: 'confirm',
	    name: 'playAgain',
	    message: 'Do you want to play again?',
	    default: true
	  }
	])
	.then(answers => {
		//If user wants to start the game
		if (answers.start){
			console.log("Let's play again!");
			//will run start game function.
			//startGame();
		}

		else {
			//If user doesn't want to play
			console.log("Please come back later!");
			return;
		}
	});
}

function gameScore() {
if (userGuess === randomWord) {
	wins++;
	console.log("You Win!")

} else {
	guessesRemaining--;
	console.log("You lose!")
}


if (guessesRemaining === 0) {
	guessesRemaining = 13;
	guessesSoFar = [];
	losses++;
	}
};

