
var Letter = require('./letter.js');


var Word = function (hangmanWord) {

    this.hangWord = hangmanWord.toUpperCase();

    //array of Letter contructors
    this.Letters = [];

    this.getLetterDisplay = function () {
        console.log(" in word . getLetterDisplay");
        var str = "";
        for (let i = 0; i < this.Letters.length; i++) {
            str += this.Letters[i].toString();
        }
        console.log(str);
    }

    this.setLetters = function () {
        for (let i = 0; i < this.hangWord.length; i++) {
            const element = this.hangWord[i];
            this.Letters.push(new Letter(element));
        }
    }

    this.guessLetter = function(userGuess){
        console.log(" in Word guessLetter : " , userGuess);
        for (let i = 0; i < this.Letters.length; i++) {            
            this.Letters[i].guess(userGuess) ;
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





