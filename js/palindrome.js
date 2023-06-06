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
* FUNCTIONS
-------------------------------------------*/
function isPalindrome(word) {

    let reverseWord = '';

    // Create reversed word
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }

    if(word === reverseWord) return true;

    return false;
}



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

    if(isPalindrome(word)) palindromeMsg = `La parola ${word} è palindroma.`;


    //*** SHOW MESSAGE ***//
    palindromeResultElem.innerText = palindromeMsg;

    // ! Log Message
    console.log(palindromeMsg);
    console.log(' ');

});


console.log('----------- DONE -----------');