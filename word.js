
var Letter = require('./letter.js');


var Word = function (hangmanWord) {

    this.isWon = false;

    this.hangWord = hangmanWord.toUpperCase();

    //array of Letter contructors
    var Letters = [];

    //this.getLetterDisplay = function () {
    this.getLetterDisplay = function () {
        //console.log(" in word . getLetterDisplay");
        var _finished = true;
        var str = "";
        for (let i = 0; i < Letters.length; i++) {
            str += Letters[i].toString();
            if (Letters[i].wasGuessed == false){
                _finished = false;
            }

        }
        console.log(str);
        this.isWon = _finished;
    }

    this.setLetters = function () {
        for (let i = 0; i < this.hangWord.length; i++) {
            const element = this.hangWord[i];
            Letters.push(new Letter(element));
        }
    }

    this.guessLetter = function (userGuess) {
        //console.log(" in Word guessLetter : ", userGuess);
        for (let i = 0; i < Letters.length; i++) {
            Letters[i].guess(userGuess);
        }
    }

}

// x = new Word("slEepy");
// x.setLetters();
// x.getLetterDisplay();


// x.guessLetter('e');
// x.getLetterDisplay();

// x.guessLetter('x');
// x.getLetterDisplay();

// x.guessLetter('p');
// x.getLetterDisplay();

// x.guessLetter('S');
// x.getLetterDisplay();

module.exports = Word;





