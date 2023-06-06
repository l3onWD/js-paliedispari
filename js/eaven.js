/*
Pari e Dispari
    - L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    - Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    - Sommiamo i due numeri
    - Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    - Dichiariamo chi ha vinto.
*/
/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');


//*** DOM ELEMENTS ***//
const eavenChoiseElem = document.getElementById('eaven-choise');
const eavenNumberElem = document.getElementById('eaven-number');
const playBtnElem = document.getElementById('play-btn');
const eavenResultElem = document.getElementById('eaven-result');


// ! Log DOM Elements
console.log('### Elementi DOM:');
console.log('Select:' , eavenChoiseElem);
console.log('Number Input:' , eavenNumberElem);
console.log('Button:' , playBtnElem);
console.log('Message Container:' , eavenResultElem);
console.log('');


/* -----------------------------------------
* FUNCTIONS
-------------------------------------------*/
function getRandomNumber(min = 1, max = 5) {
    const number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}


function isEaven(number) {
    return number % 2 === 0;
}


/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');

//*** CLICK PLAY BUTTON ***//
playBtnElem.addEventListener('click', function() {

    //*** GET USER INPUT ***//
    const choise = eavenChoiseElem.value;
    const number = parseInt(eavenNumberElem.value);


    //*** VALIDATION ***//
    //const isValid = word.length !== 0;


    //*** GET RANDOM NUMBER ***//
    const randomNumber = getRandomNumber();


    //*** VERIFY IF SUM IS EAVEN ***//
    const sum = number + randomNumber;

    console.log(sum, isEaven(sum));


    //*** SHOW MESSAGE ***//
    //palindromeResultElem.innerText = palindromeMsg;

    // ! Log Message
    //console.log(palindromeMsg);
    //console.log(' ');

});


console.log('----------- DONE -----------');