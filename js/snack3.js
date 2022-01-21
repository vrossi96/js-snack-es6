/* SNACK 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array visti oggi in classe.
*/

//# FUNZIONE
const takeFromArray = (emptyArray, array, min, max) => {
   emptyArray = [];

   array.forEach((item, index) => {
      //? Item è il valore dell'array
      // console.log(item);
      if (index >= min - 1 && index <= max - 1) {
         emptyArray.push(item);
         // console.log(item);
      }
   });
   return emptyArray;
};

const cars = [
   {
      nameCar: "Tesla",
      model: "S",
      alimentation: "elettrico",
   },
   {
      nameCar: "Tesla",
      model: "3",
      alimentation: "elettrico",
   },
   {
      nameCar: "Tesla",
      model: "X",
      alimentation: "elettrico",
   },
   {
      nameCar: "Tesla",
      model: "Y",
      alimentation: "elettrico",
   },
   {
      nameCar: "Bugatti",
      model: "Veyron",
      alimentation: "gpl",
   },
   {
      nameCar: "Mclaren",
      model: "Cope",
      alimentation: "benzina",
   },
   {
      nameCar: "Ferrari",
      model: "Sbel",
      alimentation: "diesel",
   },
   {
      nameCar: "BMW",
      model: "Serie L",
      alimentation: "diesel",
   },
   {
      nameCar: "Fiat",
      model: "Campo",
      alimentation: "benzina",
   },
   {
      nameCar: "Fiat",
      model: "Rella",
      alimentation: "benzina",
   },
];

const newList = [];

console.table(takeFromArray(newList, cars, 3, 8));
