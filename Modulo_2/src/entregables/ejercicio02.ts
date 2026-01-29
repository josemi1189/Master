/** 2. Concat **/
console.log(
  "\n--------------------------------\nEjercicio 2. Concat\n--------------------------------",
);

/** Concat()
 *
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
 */

const concat = <T>(arr1: T[], arr2: T[]): T[] => {
  return [...arr1, ...arr2];
};
const data1 = [1, 2, 3];
const data2 = [5, 6, 7];
console.log("Concat: ", concat(data1, data2));

/**
 * Concat opcional
 * Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.
 * **/
const concatOpcional = <T>(...arrays: T[][]): T[] => {
  let result: T[] = [];
  arrays.forEach((array) => {
    result = [...result, ...array];
  });
  return result;
};
const dat1 = [1, 2, 3];
const dat2 = [5, 6, 7];
const dat3 = [8, 9, 10];
console.log("Concat opcional: ", concatOpcional<number>(dat1, dat2, dat3));
