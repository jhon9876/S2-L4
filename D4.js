/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = (l1, l2) => l1 * l2;
console.log("Area rettangolo: ", area(2, 3));
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazySum = (val1, val2) => {
  if (val1 === val2) {
    return (val1 + val2) * 3;
  } else {
    return val1 + val2;
  }
};
console.log("LA SOMMA E' PARI A: ", crazySum(1, 2));
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = (val1) => {
  if (val1 > 19) {
    return (val1 - 19) * 3;
  } else return Math.abs(val1 - 19);
};

console.log("LA DIFFERENZA E' DATA DA: ", crazyDiff(5));
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = (n) => {
  if (n >= 20 && n <= 100) {
    console.log("True");
  } else if (n === 400) {
    console.log("valore pari a 400");
  } else if (n > 100 && n != 400) {
    console.log("Errore");
  }
};
boundary(50);
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = (stringa) => {
  if (stringa != "EPICODE") {
    return "EPICODE " + stringa;
  } else {
    return stringa;
  }
};
x = epify("CIAO");
console.log("RISULTATO STRINGA: ", x);
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = (val) => {
  if (val % 3 == 0) {
    return "multiplo di 3";
  } else if (val % 7 == 0) {
    return "multiplo di 7";
  } else {
    return "Non è multiplo ne di 3 ne di 7";
  }
};

y = check3and7(7);
console.log(y);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (stringa) {
  stringa_inversa = "";
  for (let index = stringa.length - 1; index >= 0; index--) {
    stringa_inversa += stringa[index];
  }
  return stringa_inversa;
};

risultatoStringaInversa = reverseString("i topi non avevano nipoti");
console.log(risultatoStringaInversa);
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const cutString = (stringa) => {
  let newString = stringa.slice(1, stringa.length - 1);
  return newString;
};

console.log("Nuova stringa: ", cutString("America"));
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  const array = [];
  for (let i = 0; i < n; i++) {
    const s = Math.floor(Math.random() * 11);
    array.push(s);
  }
  return array;
};

console.log("Numeri random: ", giveMeRandom(20));
