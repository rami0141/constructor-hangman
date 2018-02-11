//HINT: Write Letter.js first and test it on its own before moving on, 
// then do the same thing with Word.js
// HINT: If you name your letter's display function toString, JavaScript 
// will call that function automatically whenever casting that object to a 
// string (check out this example: https://jsbin.com/facawetume/edit?js,console)

// Letter.js: Contains a constructor, Letter.
// This constructor should be able to either display an underlying character 
//or a blank placeholder (such as an underscore), depending on whether or not 
//the user has guessed the letter. That means the constructor should define:
function Letter(letter) {
	// A string value to store the underlying character for the letter
	this.letter = letter;
	// A boolean value that stores whether that letter has been guessed yet
	this.guessed = false;
	// A function that returns the underlying character if the letter has been guessed, 
	//or a placeholder (like an underscore) if the letter has not been guessed
	this.displayCharacter = function() {
		if(this.guessesSoFar === true) {
			return this.letter;
		} 
			else {
				return " _ ";
			}
	} //end diplay function
};//end of Letter function

// exporting Letter constructor
module.exports = Letter;