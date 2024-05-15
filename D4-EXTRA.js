// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
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

const checkArray = function (lista) {
  console.log("Prova immissione: ", lista);
  let somma = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] > 5) {
      console.log("valore maggiore di 5");
      somma += lista[i];
    } else {
      console.log("valore minore di 5");
    }
  }
  return somma;
};
arrayCreato = giveMeRandom(10);
const result = checkArray(arrayCreato);
console.log("Risultato: ", result);
/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart = [
  (articolo1 = {
    price: 500,
    name: "palla",
    id: "dfgs",
    quantity: 1,
  }),
  (articolo2 = {
    price: 50,
    name: "rossetto",
    id: "sfgh",
    quantity: 1,
  }),
  (articolo3 = {
    price: 1,
    name: "occhiali",
    id: "ndkl",
    quantity: 3,
  }),
];

const shoppingCartTotal = () => {
  let somma = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    somma += shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return somma;
};

const sum = shoppingCartTotal();
console.log("Guadagno totale del negozio: ", sum);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const addToShoppingCart = function (object) {
  const k = shoppingCart;
  k.push(object);
  return k;
};

const new_obj = {
  price: 20,
  name: "materasso",
  id: "syjh",
  quantity: 2,
};
const_result = addToShoppingCart(new_obj);
console.log("Aggiunta oggetto: ", const_result);
/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function () {
  let massimo = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > massimo) {
      massimo = shoppingCart[i].price;
    }
  }

  return massimo;
};
console.log("valore massimo trovato: ", maxShoppingCart());

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function () {
  return shoppingCart[2];
};
ultimo_oggetto = latestShoppingCart();
console.log("ultimo oggetto: ", ultimo_oggetto);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const loopUntil = function (x) {
  let flag = "true";
  let counter = 0;
  let rNumber = Math.floor(Math.random() * 10);
  while (flag === "true") {
    if (rNumber < x) {
      rNumber = Math.floor(Math.random() * 10);
      console.log(rNumber);
    } else if (rNumber > x) {
      counter++;
    }
    if (counter === 3) {
      flag = "false";
    }
  }
};
loopUntil(8);
/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
