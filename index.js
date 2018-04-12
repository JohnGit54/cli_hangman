var Word = require('./word.js');
var inquirer = require("inquirer");

const START_COUNT = 10;
var randomWordArr = ['yes', 'no', 'silly', 'javascript',
    'nonsense', 'tired', 'pillow', 'auto', 'better call saul',
    'Knights in White Satin', 'guardians of the galaxy',
    'forrest gump', 'who wants to be a millionaire',
    'mary poppins', 'breaking bad', 'microsoft windows'
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
        
        if (!_Word.wasGoodGuess){
            --guessCnt;
        }
        console.log("Guesses remaining" , guessCnt);


        if (guessCnt <= 0) {
            console.log('Sorry - you lost');
            reStartGame();
        } else if (_Word.isWon) {
            console.log("You Won");
            reStartGame();
        } else {
            playGame();
        }
    })
}

function reStartGame() {
    inquirer.prompt([{
        name: "start",
        type: 'checkbox',
        choices: ["NewGame", "Exit"],
        message: "Do you want to start new game?"
    }
    ]).then(answers => {
        console.log(answers.start[0]);
        if (answers.start[0] == 'Exit') {
            console.log("GoodBye!")
        } else {
            initialize();
            playGame();
        }
    });
}


initialize();
playGame();