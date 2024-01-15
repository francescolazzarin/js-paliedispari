// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

let parola=prompt("inserisci una parola")
function palindroma(){
    parola=Array.from(parola)
    let nuovaParola=""
    for (let i=0; i<parola.length; i++){  
      nuovaParola+=parola[parola.length - 1 -i]
    }
    let riconvertita=""
    for (i=0 ; i<parola.length;i++){
        riconvertita+=`${parola[i]}`
    }
    if (nuovaParola===riconvertita){
        document.writeln("la parola è palindroma")
    }else{
        document.writeln("la parola non è palindroma")
    }
    return nuovaParola
}
console.log(palindroma())