// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
const prosegui=document.getElementById("prosegui")
const pari=document.getElementById("pari")
const dispari=document.getElementById("dispari")


let controllo
let randomNumber=0
let numUtente=0
let somma=0
function pariODispari(somma){
     somma=numUtente+randomNumber
     if ((somma)%2===0){
        controllo=true
     }else{
        controllo=false
     }
     return controllo
}
function randomico(min,max){
    randomNumber=Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber
}
function inserisciUnNumero(){
    return numUtente=parseInt(prompt("inserisci un numero da 1 a 5 "))
}
prosegui.addEventListener('click', inserisciUnNumero)

prosegui.addEventListener('click',function(){
    document.writeln(`<p>l'avversario ha "buttato" il numero: ${randomico(1,5)} </p>`)
    if (pariODispari(somma) && pari.checked) {
        document.writeln("<p>hai vinto!</p>")
    }else if(!(pariODispari(somma) && dispari.checked)){
        document.writeln("<p>hai vinto!</p>")
    }else{
        document.writeln("hai perso!")
    }
    
})
console.log(pari.checked)
console.log(pariODispari(somma))