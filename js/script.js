/* FizzBuzz
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano (o meglio ancora in inglese se vi ci trovate) per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo “a mano”
 */

//loop numbers 1 to 100
for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    //stampo FizzBuzz
    console.log("FizzBuzz");
    document.writeln("FizzBuzz" + "<br>");
  } else if (i % 3 === 0) {
    //stampo Fizz
    console.log("Fizz");
    document.writeln("Fizz" + "<br>");
  } else if (i % 5 === 0) {
    //stampo Buzz
    console.log("Buzz");
    document.writeln("Buzz" + "<br>");
  } else {
    //stampo tutti gli altri numeri
    console.log(i);
    document.writeln(i + "<br>");
  }
}

//ALTERNATIVA CON INNERHTML

//loop numbers 1 to 100
/* for (var i = 1; i <= 100; i++) {
  var stampaTesto = document.getElementById("testo");
  if (i % 3 === 0 && i % 5 === 0) {
    //stampo FizzBuzz
    console.log("FizzBuzz");
    stampaTesto.innerHTML += "FizzBuzz" + "<br>";
  } else if (i % 3 === 0) {
    //stampo Fizz
    console.log("Fizz");
    stampaTesto.innerHTML += "Fizz" + "<br>";
  } else if (i % 5 === 0) {
    //stampo Buzz
    console.log("Buzz");
    stampaTesto.innerHTML += "Buzz" + "<br>";
  } else {
    //stampo tutti gli altri numeri
    console.log(i);
    stampaTesto.innerHTML += i + "<br>";
  }
} */
