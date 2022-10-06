/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana 
(con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
*/

// Definizioni
let Km = 0;
let age = 0;
const costPerKm = 0.21;
let ticketPrice = 0;

// Input Utente

km = parseFloat(prompt('Quanti chilometri pensi di percorrere?'));
// console.log('km', km)
age = parseInt(prompt('Quanti anni hai?'));
// console.log('age', age)


// Avvertiamo l'utente che ha sbagliato ad inserire i dati
if (isNaN(km) || isNaN(age)) {
    alert('I dati inseriti sono errati, aggiorna la pagina ed inserisci solo dei numeri.')
}
    else {
        // Calcoliamo il prezzo del biglietto in base ai Km inseriti dall'utente
        ticketPrice = km * costPerKm; 

        // Applichiamo uno sconto del 20% se l'utente è minorenne
        if (age < 18){
            ticketPrice = ticketPrice * 0.8;
        }
        // Applichiamo uno sconto del 40% se l'utente è over 65
        else if (age > 65){
            ticketPrice = ticketPrice * 0.6;
        }
        // Visualiziamo il prezzo in formato "Valuta"(due decimali)
        ticketPrice = ticketPrice.toFixed(2);
        // console.log('ticketPrice', ticketPrice)
    }

document.getElementById('ticketPrice').innerHTML ='Il costo totale del tuo Biglietto è di: ' + ticketPrice + ' &euro;';