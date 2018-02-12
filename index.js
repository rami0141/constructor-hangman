// index.js: The file containing the logic for the course of the game,
//  which depends on Word.js and:
var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require('inquirer');


// // array of words to be guessed
// var wordArray = ["poodle", "dachshund", "retriever", "pitbull", "terrier", "coonhound", "huskie"];
// var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
// var rw = randomWord.split('');

// //Counter
// var wins = 0;
// var guessesRemaining = 13;
// var userGuess = process.argv[2];
// var guessesSoFar = [];

//Use Inquirer to have user start the game
var askQuestion = function() {
	inquirer.prompt([
	 {
	    type: 'confirm',
	    name: 'start',
	    message: 'Do you want to start playing hangman?',
	    default: true
	  }
	]);
}
// 	inquirer.prompt(beginGame).then(answers => {
// 		//If user wants to start the game
// 		if (answers.start){
// 			console.log(clc.cyanBright("Let's play!"));
// 			//will run start game function.
// 			startGame();
// 		}

// 		else {
// 			//If user doesn't want to play
// 			console.log(clc.cyanBright("Please come back later!"));
// 			return;
// 		}
// 	});
// }

// function gameScore() {
// if (userGuess === randomWord) {
// 	wins++;

// } else {
// 	guessesRemaining--;
// }


// if (guessesRemaining === 0) {
// 	guessesRemaining = 13;
// 	guessesSoFar = [];
// 	losses++;
// 		} 
// };

