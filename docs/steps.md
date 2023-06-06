# Pali e Dispari

<br>

## Steps Palindroma:

- Recupero il bottone
- **QUANDO** _"ho cliccato il bottone"_
    - Recupero la parola inserita
    - Creo un messaggio di insuccesso
    - _"Verifico se una parola è palindroma"_
    - **SE** _"la parola è palindroma"_
        - Aggiorno il messaggio con il successo
    - Mostro il risultato
    - **FINE**
- **Verifico se una parola è palindroma**
    - **FINCHE** _"Ho caratteri nella parola, contando all'indietro"_
        - Salvo il carattere corrente
    - **SE** _"la parola inserita è uguale a quella invertita"_
        - La parola è palindroma
        - **RITORNO** _"vero"_
    - La parola non è palindroma
    - **RITORNO** _"falso"_

<br>

## Steps Pari e Dispari:

- Recupero il bottone
- **QUANDO** _"ho cliccato il bottone"_
    - Recupero la scelta (pari o dispari)
    - Recupero il numero (da 1 a 5)
    - Creo un messaggio di sconfitta 
    - _"Genero un numero random da 1 a 5"_
    - Sommo i numeri
    - _"Verifico se un numero è pari"_
    **SE** _"Il numero è pari"_ **E** _"la scelta è pari"_ **OPPURE** _"Il numero è dispari"_ **E** _"la scelta è dispari"_
        - Aggiorno il messaggio con la vittoria
    - Mostro il risultato
    - **FINE**
- **Genero un numero random da 1 a 5**
    - Calcolo un numero random da 1 a 5
    - **RITORNO** _"il valore"_
- **Verifico se un numero è pari**
    - **SE** _"dividendo per 2 non ho resto"_
        - Il numero è pari
        - **RITORNO** _"vero"_
    - Il numero è dispari
    - **RITORNO** _"falso"_
