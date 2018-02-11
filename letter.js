//HINT: Write Letter.js first and test it on its own before moving on, 
// then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript 
// will call that function automatically whenever casting that object to a 
// string (check out this example: https://jsbin.com/facawetume/edit?js,console)

var inquirer = required('inquirer');
// Letter.js: Contains a constructor, Letter.
// This constructor should be able to either display an underlying character 
//or a blank placeholder (such as an underscore), depending on whether or not 
//the user has guessed the letter. That means the constructor should define:

function Letter(letter) {
	// A string value to store the underlying character for the letter
	this.letter = letter;
	// A boolean value that stores whether that letter has been guessed yet
	this.guessesSoFar = true;
	// A function that returns the underlying character if the letter has been guessed, 
	//or a placeholder (like an underscore) if the letter has not been guessed
	this.underlyingCharacter = function() {
		if(this.letter === " ") {
			this.guessesSoFar = true;
			return " ";
		} 
	}; //end of underlyingCharacter function

	this.check = function(letter) {
	// A function that takes a character as an argument and checks it against the 
	//underlying character, updating the stored boolean value to true if it was guessed correctly
		if(this.guessesSoFar === false) {
			return " _ ";
		}
	}//end of check function
}//end of constructor Letter

// exporting letter.js
module.exports = letter;