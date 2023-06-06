/*
Palidroma
    - Chiedere all’utente di inserire una parola
    - Creare una funzione per capire se la parola inserita è palindroma
*/
/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');


//*** DOM ELEMENTS ***//
const wordElem = document.getElementById('palindrome-word');
const verifyElem = document.getElementById('palindrome-btn');
const palindromeResultElem = document.getElementById('palindrome-result');


// ! Log DOM Elements
console.log('### Elementi DOM:');
console.log('Word Input:' , wordElem);
console.log('Verify Button:' , verifyElem);
console.log('');


/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');

//*** CLICK VERIFY BUTTON ***//
verifyElem.addEventListener('click', function() {

    //*** GET USER INPUT ***//
    const word = wordElem.value.trim();


    //*** VERIFY PALINDROME ***//
    let palindromeMsg = `La parola ${word} non è palindroma.`;


    //*** SHOW MESSAGE ***//
    palindromeResultElem.innerText = palindromeMsg;

    // ! Log Message
    console.log(palindromeMsg);
    console.log(' ');

});


console.log('----------- DONE -----------');