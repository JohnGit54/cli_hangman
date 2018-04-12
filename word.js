
var Letter = require('./letter.js');


var Word = function (hangmanWord) {

    this.isWon = false;

    this.hangWord = hangmanWord.toUpperCase();

    this.holdFalseCounts = 0;
    this.wasGoodGuess = false;

    //array of Letter contructors
    var Letters = [];

    //this.getLetterDisplay = function () {
    this.getLetterDisplay = function () {
        //console.log(" in word . getLetterDisplay");
        var _finished = true;
        var str = "";
        var cntNotFound = 0;
        for (let i = 0; i < Letters.length; i++) {
            str += Letters[i].toString();
            if (Letters[i].wasGuessed == false) {
                _finished = false;
                cntNotFound++;
            }
        }
        this.wasGoodGuess = false;
        //console.log("cntNotFound: ", cntNotFound, ' this.holdFalseCounts:', this.holdFalseCounts);
        if (cntNotFound < this.holdFalseCounts) {
            this.wasGoodGuess = true;
            this.holdFalseCounts = cntNotFound;
        }

        console.log(str);
        this.isWon = _finished;
    }

    this.setLetters = function () {
        for (let i = 0; i < this.hangWord.length; i++) {
            const element = this.hangWord[i];
            Letters.push(new Letter(element));
            this.holdFalseCounts++; // this will hold total num of unguessted leter
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





