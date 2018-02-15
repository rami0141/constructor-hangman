var Word = function (inputword) {
    this.cword = inputword;
    // split() will split up one word into letters "pitbull" to "p", "i", "t", "b", "u", "l", "l"
    this.correct = this.cword.split('');
    // array where you push letters
    this.display = [];

    this.initiate = function () {
        for (var i = 0; i < this.correct.length; i++) {
            // this will add underscores to the display array instead of the letters
            this.display.push("_")
        }
    }

    this.compare = function (userGuess, guessCount) {
        if (this.correct.indexOf(userGuess) >= 0) {
            var ui = this.correct.indexOf(userGuess);
            this.display[ui] = userGuess;
            this.correct[ui] = "_";
        } else {
            guessesCount--;
        }
        return guessCount;
    }
}

module.exports = Word;




