//Word.js: Contains a constructor, Word that depends on the Letter constructor. 
//This is used to create an object representing the current word the user is 
//attempting to guess. That means the constructor should define:
//take in info from letter.js
var letter = require('./Letter');

function Word(word) {
	//setting a property called word and is equal to word which will be passed through the function
	//will take words from array
	this.word = word;

	//an array of letters that are in each word
	this.newALetterArray = []; 
	this.guess = false;
	
	//creating a funtion that loops over the word property and pushes letters into an array
	this.pushToArray = function() {
		for (var i = 0; i < this.word.length; i++){
			this.newALetterArray.push(new letter.Letter(this.word[i].toUpperCase()));
		}
	}

	this.character = function(){

	}
};

module.exports = Word; 