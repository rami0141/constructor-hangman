// index.js: The file containing the logic for the course of the game,
//  which depends on Word.js and:
var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = required("inquirer");


// array of words to be guessed
var wordArray = ["poodle", "dachshund", "retriever", "pitbull", "terrier", "coonhound", "huskie"];
var randomWord = words[Math.floor(Math.random() * wordArray.length)];
var rw = randomWord.split('');

//Counter
var wins = 0;
var guessesRemaining = 13;
var userGuess = process.argv[2];
var guessesSoFar = [];


function score() {
if (userGuess === randomWord) {
	wins++;

} else {
	guessesRemaining--;
}


if (guessesRemaining === 0) {
	guessesRemaining = 13;
	guessesSoFar = [];
	losses++;
} 
};
