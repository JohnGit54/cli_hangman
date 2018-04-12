
var Word = require('./word.js');
var inquirer = require("inquirer");

const START_COUNT = 10;
var randomWordArr = ['yes', 'no', 'silly',
    'nonsense', 'tired', 'pillow', 'auto'];

function getRandom() {
    return Math.floor(Math.random() * randomWordArr.length);
}
function selectWord() {
    return randomWordArr[getRandom()];
}



function CliView() {

    var self = this;
    var word; //  variable for a new Word constructor
    var guessCnt;

    this.newGame = function () {
        //starts the game by giving a word to WRD constructor
        word = new Word(selectWord());
        word.setLetters();
        //console.log(word);
        word.getLetterDisplay();
        guessCnt = START_COUNT;
    }

    this.handleAnswer = function (inputLetter) {
        console.log('CliView.handle answer letter guessed', inputLetter);
        word.guessLetter(inputLetter);
        word.getLetterDisplay();
    }

    function playGame() {
        inquirer.prompt([{
            name: "input",
            message: 'Select Letter'
        }]).then(function (answers) {
            console.log(" playgamestart of function answer", answers.input);
            self.handleAnswer(answers.input);
            console.log("bottom of function answer");
        })
        guessCnt--;
        console.log('guessCnt ', guessCnt);
    }


    this.startGame = function () {
        var self = this;
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
                this.newGame();
                //nest inquirere for user input guess/letter

                playGame();

                // inquirer.prompt([{
                //     name: "input",
                //     message: 'Select Letter'
                // }]).then(function (answers) {
                //     console.log("start of function answer" ,answers.input);
                //     self.handleAnswer(answers.input);
                //     console.log("bottom of function answer");                
                // })  
            }
            playGame();
        });
    }

}



//--test code --//

x = new CliView();
x.startGame();






