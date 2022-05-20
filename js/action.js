/* Il programma dovrà mostrare una form da compilare con cui chiedere all’utente:
nome e cognome
km da percorrere
eta (input testuale o number)
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Il recap dei dati e l’output del prezzo finale va stampato in pagina (formattato con massimo due decimali, per indicare centesimi sul prezzo)
Al click sul tasto GENERA si genera il biglietto con i calcoli dovuti
Al click sul tasto ANNULLA si svuotano i campi
 */


/* Inizio con il prendere le variabili dal documento HTML */

const inputUserName = document.querySelector(`[name="userName"]`);
const inputUserKm = document.querySelector(`[name="userKm"]`);
const inputUserAge = document.querySelector(`[name="userAge"]`);

const submitGenera = document.getElementById("submitGenera");
const submitAnnulla = document.getElementById("submitAnnulla");


/* Se si clicca sul pulsante Genera devo salvare i dati nelle variabili */


submitGenera.addEventListener("click", function() {
    /* Questo codice verrà eseguito al click del pulsante */
    
    console.log(inputUserName.value, inputUserKm.value, inputUserAge.value);
    

    /* Per inserire i dati dalla stringa superiore a quella inferiore */
    document.getElementById("nameSurnameIns").innerHTML = inputUserName.value;
    
    // calcolo del prezzo del biglietto intero
    let ticketPrice = parseInt(inputUserKm.value) * 0.21;
    console.log (ticketPrice);
    // applicare sconti specifici in base all'età
    let age = parseInt(inputUserAge.value);

    if (age > 14 && age < 18) {
        ticketPrice = ticketPrice - (ticketPrice * 0.20);
    } else if (age > 65){
        ticketPrice = ticketPrice - (ticketPrice * 0.40);
    } else {
        ticketPrice;
    }

    console.log(ticketPrice);
    // stampare il prezzo sul biglietto nuovo

    document.querySelector(".ticketPriceIntoCard").innerHTML = ticketPrice.value;

    
})





/* Con il pulsante annulla vanno svuotati i campi */