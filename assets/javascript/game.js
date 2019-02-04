var SciWords = ['dune', 'riker', 'darth vader', 'android', 'phillip k dick', 'cyberspace', 'alien']; /* Initializing Sci-Fi Word Bank */

var SciChoice = SciWords[Math.floor(Math.random() * SciWords.length)]; /* Randomly chooses word from SciWords array */

console.log('SciChoice = '+SciChoice);

var WordTemp =[]; /* Used to create a Blank Template That will be modified throughout the game */ 

WordTemp = GenBlank(SciChoice);
document.write(WordTemp);

/* --------------------------------------------------------------------------------------------------------- */
/* ------------------------------------------------ Functions ---------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */

function GenBlank(Word){
    /* Generates blank space array equal to Letters in word input in function, then returns that array */
    var BlankArr=[];

    for(var i = 0; i<Word.length; i++){
        if(Word[i]==' '){
            BlankArr.push(' ');
        }
        else{
            BlankArr.push('_'); /*Added Space after _ for better kerning*/
        }
    }

    console.log(BlankArr);

    return BlankArr;
}

/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
/* --------------------------------------------------------------------------------------------------------- */
