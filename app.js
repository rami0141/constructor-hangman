const prompt = require('prompt');
const rpal = require('./Index.js')
var wl = ["poodle", "dachshund", "retriever", "pitbull", "terrier", "coonhound", "huskie"];
var userGuess = 10;

var r = new rpal(wl);
var rWord = r.GenrandomWord();
rWord.initiate();

GameBegin(userGuess)

function GameBegin(guessCount) {
    
    console.log("\nGuesses left: " + guessCount);

    rWord.checkWin();
    if (rWord.win) {
        console.log("You win");
        return;
    }
    else if (guessCount == 0) {
        console.log("Game Over")
        return;
    }
    
    console.log(rWord.display.join(" "));

    prompt.get(["Guess"], function (err, result) {
        if (err) { return err; }
        if (rWord.compare(result.Guess) != true) {
            guessCount--;
        }
        GameBegin(guessCount);
    })
    
}