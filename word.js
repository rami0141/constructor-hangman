
var Word = function (inputword) {
    this.cword = inputword;
    this.correct = this.cword.split('');
    this.display = [];
    this.win = false;

    this.initiate = function () {
        for (var i = 0; i < this.correct.length; i++) {
            this.display.push("_")
        }
    }

    this.compare = function (userGuess) {
        if (this.correct.indexOf(userGuess) >= 0) {
            var ui = this.correct.indexOf(userGuess);
            this.display[ui] = userGuess;
            this.correct[ui] = "_";
            return true;
        } else {
            return false;
        }
    }

    this.checkWin = function () {
        var temp = this.display.concat().join("");
        if (this.cword == temp) {
            this.win = true;
        }
    }
}

module.exports = Word;




