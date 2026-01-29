/** 3. Clone Merge **/
console.log(
  "\n--------------------------------\nEjercicio 3. Clone Merge\n--------------------------------",
);

/** Clone()
 *
 * Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
 **/

const clone = (source: Person): Person => {
  const cloned = { ...source };
  return cloned;
};

interface Person {
  name: string;
  location: string;
}
const source: Person = {
  name: "Jose",
  location: "Almería",
};
const cloned = clone(source);
console.log("Clone: ", cloned, "\n(source === cloned)? ->", source === cloned);

/** Merge()
 *
 * Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las
 * propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
 **/
const merge = (source: Object, target: Object): Object => {
  let result = { ...target };
  result = { ...result, ...source };
  return result;
};

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };
console.log("Merge: ", merge(a, b));
