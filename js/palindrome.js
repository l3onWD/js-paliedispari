/* -----------------------------------------
* INIT
-------------------------------------------*/

//*** DOM ELEMENTS ***//
const wordElem = document.getElementById('palindrome-word');
const verifyElem = document.getElementById('verify-btn');
const palindromeResultElem = document.getElementById('palindrome-result');


// ! Log DOM Elements
console.log('### Elementi DOM "Palindroma":');
console.log('Word Input:' , wordElem);
console.log('Verify Button:' , verifyElem);
console.log('');


/* -----------------------------------------
* FUNCTIONS
-------------------------------------------*/
/**
 * Check if a word is palindrome.
 * @param {String} word 
 * @returns {Boolean}
 */
function isPalindrome(word) {

    let reverseWord = '';

    // Create reversed word
    for(let i = word.length - 1; i >= 0; i--) {
        reverseWord += word.charAt(i);
    }

    // Check if is palindrome
    if(word === reverseWord) return true;

    return false;
}


/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK VERIFY BUTTON ***//
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