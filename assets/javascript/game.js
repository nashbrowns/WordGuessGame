var SciWords = ['dune', 'riker', 'darth vader', 'android', 'phillip k dick', 'cyberspace', 'alien']; /* Initializing Sci-Fi Word Bank */

var SciChoice = SciWords[Math.floor(Math.random() * SciWords.length)]; /* Randomly chooses word from SciWords array */

console.log('SciChoice = '+SciChoice);

WordTemp = GenBlank(SciChoice);


document.getElementById("Word-Temp").innerHTML = WordTemp;

console.log(WordTemp.length);



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

/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
