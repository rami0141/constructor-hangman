//Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is 
//attempting to guess. That means the constructor should define:
//take in info from letter.js
var letter = require('./Letter');

function Word(word) {
	//setting a property called word and is equal to word which will be passed through the function
	//will take words from array
	this.word = word;

	//an empty array of letters that are in each word
	this.newALetterArray = []; 
	this.userGuessArray = [];
	
	//Creates a Letter object for each letter in the current word.
	this.pushToArray = function() {
		for (var i = 0; i < this.word.length; i++){
			this.letter = new Letter(word.charAt(i))
			//pushes the letter into the newLetterArray
    		this.newALetterArray.push(this.letter);
		}
	}
// A function that returns a string representing the word. This should 
//call the function on each letter object (the first function defined in Letter.js) 
//that displays the character or an underscore and concatenate those together.

	this.character = function(){

	}
};

// A function that takes a character as an argument and calls the guess function 
//on each letter object (the second function defined in Letter.js)
module.exports = Word; 