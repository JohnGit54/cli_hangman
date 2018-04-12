
var Letter = function (gameLetter) {

    this.gameLetter = gameLetter.toUpperCase();
    this.wasGuessed = false;


    //1) display underlying character or blank placeholdr    
    this.toString = function () {
        // if space in between words 
        // make believe space wasGuessed all ready
        if (gameLetter == ' ') {
            this.wasGuessed = true;
        }

        if (this.wasGuessed) {
            //console.log(this.gameLetter);
            return ' ' + gameLetter + ' ';
        } else {            
            //console.log(' - ');
            return ' - ';
        }
    }

    this.guess = function (guessVal) {
        var userLetter = guessVal.toUpperCase();
        if (this.wasGuessed) return true;
        if (userLetter.toUpperCase() === this.gameLetter) {
            this.wasGuessed = true;
        }
    }
}



// x = new Letter('G');
// x.guess('a');
// console.log(x.wasGuessed);
// x.toString();

 
// x.guess('g');
// console.log(x.wasGuessed);
// x.toString();

// x.guess('gfrtgyhuji');
// console.log(x.wasGuessed);
// x.toString();


module.exports = Letter;