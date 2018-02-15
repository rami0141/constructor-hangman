var Word = require('./Word.js');

var RWord = function (wordList) {
    this.Words = wordList

    // This fuction pick a random word from the word list
    this.GenrandomWord = function() {
        var rw = this.Words[Math.floor(Math.random() * this.Words.length)];
        var rwo = new Word(rw);
        return rwo;
    }

        

}


module.exports = RWord;