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
constplayBtnElem = document.getElementById('play-btn');
const eavenResultElem = document.getElementById('eaven-result');


// ! Log DOM Elements
console.log('### Elementi DOM:');
console.log('Select:' , eavenChoiseElem);
console.log('Number Input:' , eavenNumberElem);
console.log('Button:' , eavenBtnElem);
console.log('Message Container:' , eavenResultElem);
console.log('');



/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');

//*** CLICK PLAY BUTTON ***//
verifyElem.addEventListener('click', function() {

    //*** GET USER INPUT ***//
    const word = wordElem.value.trim();


    //*** VALIDATION ***//
    const isValid = word.length !== 0;


    //*** VERIFY PALINDROME ***//
    let palindromeMsg = `La parola ${word} non è palindroma.`;

    if(!isValid) palindromeMsg = `Errore: non hai inserito la parola da verificare!`
    else if(isPalindrome(word.toLowerCase())) palindromeMsg = `La parola ${word} è palindroma.`;


    //*** SHOW MESSAGE ***//
    palindromeResultElem.innerText = palindromeMsg;

    // ! Log Message
    console.log(palindromeMsg);
    console.log(' ');

});


console.log('----------- DONE -----------');