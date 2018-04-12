var Word = require('./word.js');
var inquirer = require("inquirer");

const START_COUNT = 10;
var randomWordArr = ['yes', 'no', 'silly',
    'nonsense', 'tired', 'pillow', 'auto',
'Knights in White Satin',
];

var _Word;
var guessCnt;

function getRandom() {
    return Math.floor(Math.random() * randomWordArr.length);
}
function selectWord() {
    return randomWordArr[getRandom()];
}


function initialize() {
    //create new Word object- send in starting 
    // hangman word
    _Word = new Word(selectWord());
    _Word.setLetters();
    _Word.getLetterDisplay();
    guessCnt = START_COUNT;
}

function playGame() {
    inquirer.prompt([{
        name: "input",
        message: 'Select Letter'
    }]).then(function (answers) {
        //console.log(" playGame function answer", answers.input);
        _Word.guessLetter(answers.input);
        _Word.getLetterDisplay();
        //handleAnswer(answers.input);
        guessCnt--;
        //console.log( guessCnt,"bottom of function answer");

        if (guessCnt <= 0) {
            console.log('Sorry - you lost');
        } else if (_Word.isWon) {
            console.log("You Won");
        } else {
            playGame();
        }

    })


}


initialize();
playGame();