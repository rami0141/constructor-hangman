var prompt = require('prompt');
var rpal = require('./Index.js');
var word = require('./Word.js');
var wl = ["poodle", "dachshund", "retriever", "pitbull", "terrier", "coonhound", "huskie"];
var userGuess = 10;

// var r = new rpal(wl);
// var rWord = r.GenrandomWord();
var rWord = new word("pitbull");
rWord.initiate();
prompt.start();
GameBegin(10);




function GameBegin(guessCount) {
    
    console.log("Guesses left: " + guessCount);
    //win or loss 

    console.log(rWord.cword);
    console.log(rWord.display.join(" "));

    var ngc = guessCount;

    prompt.get(["Guess"], function (err, result) {
        if (err) { return err; }
        else {
            guessCount--;
        }
    })
    

    //GameBegin(ngc);
}
