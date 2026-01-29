/** 1. Array operations **/
console.log(
  "\n--------------------------------\nEjercicio 1: Array operations\n--------------------------------",
);
/** Head()
 *
 * Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
 **/
const head = <T>([first]: T[]): T => {
  return first;
};
console.log("Head: ", head<number>([1, 2, 3, 4, 5])); // 1

/** Tail()
 *
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelva todos menos el primer elemento. Utiliza rest operator.
 **/
const tail = <T>([, ...rest]: T[]): T[] => {
  return rest;
};
console.log("Tail: ", tail<number>([1, 2, 3, 4, 5])); //[2, 3, 4, 5]

/** Init()
 *
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 **/
const init = <T>(data: T[]): T[] => {
  return data.slice(0, data.length - 1);
};
console.log("Init: ", init<number>([1, 2, 3, 4, 5])); //[1, 2, 3, 4]

/** Last()
 *
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
 **/
const last = <T>(data: T[]): T => {
  return data[data.length - 1];
};
console.log("Last: ", last<number>([1, 2, 3, 4, 5])); // 5
