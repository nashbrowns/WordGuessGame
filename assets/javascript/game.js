var SciWords = ['dune', 'enterprise', 'darth vader', 'android', 'phillip k dick', 'cyberspace', "ender's game", 'neuromancer', 'jean luc picard','vulcan', 'starship troopers']; /* Initializing Sci-Fi Word Bank */
var CorrectGuess = []; //Stores correctly guessed letters
var IncorrectGuess = []; //Stores incorrectly guessed letters
var NewArray = []; //Stores empty array for new game
var SciChoice = SciWords[Math.floor(Math.random() * SciWords.length)]; /* Randomly chooses word from SciWords array */
var GuessCount = 10; //Stores number of guesses

SciChoice = SciChoice.toUpperCase();
console.log('SciChoice = '+SciChoice);

WordTemp = GenBlank(SciChoice);

console.log(typeof WordTemp);

document.getElementById("Word-Temp").innerHTML = WordTemp;

document.getElementById("Guess-Count").innerHTML = "Guesses Left: "+GuessCount;



document.onkeyup = function(event) {

    var Guess = event.key.toUpperCase();

    if( (Alphanumeric(Guess)) && (CorrectGuess.indexOf(Guess) == -1) && (IncorrectGuess.indexOf(Guess) == -1) ){

        
        if( SciChoice.indexOf(Guess) !== -1 ){
            CorrectGuess.push(Guess);
            UpdateBoard(Guess);
        }
        else{
            IncorrectGuess.push(Guess.toUpperCase());
            document.getElementById("Incorrect-Guess").innerHTML = IncorrectGuess;
            GuessCount--;
            document.getElementById("Guess-Count").innerHTML = GuessCount;       
        }

    }

    if(GuessCount == 0){
        alert("Game Over!");
        ChoooseNew();
    }

    if(WordTemp == SciChoice){
        $(document).ready(function() {
            alert("You Win!");
            ChoooseNew();
        });
    }

  };

/* --------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------ Functions ---------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */

function ChoooseNew(){
    CorrectGuess = [];
    IncorrectGuess = [];
    SciChoice = SciWords[Math.floor(Math.random() * SciWords.length)]; /* Randomly chooses word from SciWords array */
    SciChoice = SciChoice.toUpperCase();
    GuessCount = 10; //Stores number of guesses
    WordTemp = GenBlank(SciChoice);
    document.getElementById("Word-Temp").innerHTML = WordTemp; 
    document.getElementById("Incorrect-Guess").innerHTML = "";
    document.getElementById("Guess-Count").innerHTML = "";
  
}

function GenBlank(Word){
    /* Generates blank space array equal to Letters in word input in function, then returns that array */
    var BlankArr = '_';

    for(var i = 1; i<Word.length; i++){

        if(Word[i]==' '){
            BlankArr = BlankArr+' ';
        }
        else if(Word[i]=="'"){
            BlankArr = BlankArr+"'";
        }
        else{
            BlankArr = BlankArr+'_';
        }

    }

    console.log(BlankArr);

    return BlankArr;
}

function Alphanumeric(Letter){ 
    var Alpha = /^[a-zA-Z]$/;
    if(Letter.match(Alpha)){ 
        return true; 
    } 
    else {  
        return false; 
    } 
}

function UpdateBoard(Letter){
    var indices = [];
    var StrCon = ""; /* Used to convert back to string */

    WordTemp = WordTemp.split(""); /* Splitting into array so can replace elements */

    /* Finds all instances of letter and puts them in an arrray called indices */
    var idx = SciChoice.indexOf(Letter);
    while(idx !== -1){
        indices.push(idx);
        idx = SciChoice.indexOf(Letter, idx + 1);
    }

    for(var i = 0; i<indices.length; i++){

        WordTemp[indices[i]] = Letter; /* Putting correctly guessed letter into displayed word */

    }
    /* WordTemp[SciChoice.indexOf(Letter)] = Letter; // Putting correctly guessed letter into displayed word */ 
    
    for(var i = 0; i<WordTemp.length; i++){
        StrCon = StrCon + WordTemp[i];
        }
        
    WordTemp = StrCon;
    
    document.getElementById("Word-Temp").innerHTML = WordTemp;

} 

/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
