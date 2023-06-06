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
    let isValid = true;
    let gameMsg = '';
    
    if(isNaN(number) || number < 1 || number > 5) isValid = false;
    
    if(!isValid) gameMsg = 'Errore: il numero deve essere compreso tra 1 e 5!';
    else {

        //*** GET RANDOM NUMBER ***//
        const randomNumber = getRandomNumber();


        //*** VERIFY VICTORY ***//
        // Prepare message
        gameMsg = `
        <p>Hai scelto ${choise}</p>
        <p>Numero inserito: ${number}</p>
        <p>Numero generato: ${randomNumber}</p>`;

        // Get sum
        const sum = number + randomNumber;
        
        // Verify victory
        if( (isEaven(sum) && choise === 'pari') || 
            (!isEaven(sum) && choise === 'dispari') )
        {
            gameMsg += `<p>La somma è ${sum}. Hai Vinto!!!</p>`;
        } else {
            gameMsg += `<p>La somma è ${sum}. Hai Perso.</p>`;
        }
    }


    //*** SHOW MESSAGE ***//
    eavenResultElem.innerHTML = gameMsg;

    // ! Log Message
    console.log(gameMsg);
    console.log(' ');

});


console.log('----------- DONE -----------');