var SciWords = ['dune', 'riker', 'darth vader', 'android', 'phillip k dick', 'cyberspace', 'alien']; /* Initializing Sci-Fi Word Bank */
var CorrectGuess = [];
var IncorrectGuess = [];

var SciChoice = SciWords[Math.floor(Math.random() * SciWords.length)]; /* Randomly chooses word from SciWords array */

console.log('SciChoice = '+SciChoice);

WordTemp = GenBlank(SciChoice);

console.log(typeof WordTemp);

document.getElementById("Word-Temp").innerHTML = WordTemp;

document.onkeyup = function(event) {
    if( (Alphanumeric(event.key)) && (CorrectGuess.indexOf(event.key) == -1) && (IncorrectGuess.indexOf(event.key) == -1)){

        var Guess = event.key.toLowerCase();
        
        if( SciChoice.indexOf(Guess) !== -1 ){
            CorrectGuess.push(Guess);
            console.log(CorrectGuess);
            UpdateBoard(Guess);
        }
        else{
            IncorrectGuess.push(Guess);
            console.log(IncorrectGuess);
        }

    }
  };

/* --------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------ Functions ---------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */

function GenBlank(Word){
    /* Generates blank space array equal to Letters in word input in function, then returns that array */
    var BlankArr = '_';

    for(var i = 1; i<Word.length; i++){

        if(Word[i]==' '){
            BlankArr = BlankArr+' ';
        }
        else{
            BlankArr = BlankArr+'_';
        }

    }

    console.log(BlankArr);

    return BlankArr;
}

function Alphanumeric(Letter){ 
    var Alpha = /^[a-zA-Z]+$/;
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
