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

const inputNameSurname = document.getElementById("nameSurname");
const inputKm = document.getElementById("km");
const inputAge = document.getElementById("age");

const submitGenera = document.getElementById("submitGenera");
const submitAnnulla = document.getElementById("submitAnnulla");

const insertName = document.getElementById("nameSurnameIns");
/* Se si clicca sul pulsante Genera devo salvare i dati nelle variabili */

/* Con il pulsante annulla vanno svuotati i campi */

submitGenera.addEventListener("click", function() {

    console.log(inputNameSurname.value, inputKm.value, inputAge.value);

    inputNameSurname.textContent = insertName.value
})