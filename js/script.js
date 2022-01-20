/*
Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal

BONUS
Stampare in pagina oltre che in console!
*/
// FUNCTIONS
const getRandomNumber = (min, max) => {
   const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
   return randomNumber;
}

const objNewValue = (array, newValue) => {
   for (let i = 0; i < array.length; i++) {
      const object = array[i];
      for (let key in object) {
         if (key == newValue){
            object[newValue] = getRandomNumber(3, 39);
         }
      }
   }
}

const containerOne = document.getElementById('es-1-container');
const containerTwo = document.getElementById('es-2-container');
//# ESERCIZIO 1
// Creo array di biciclette (oggetti)
const biciclette = [
   {nome: 'Graziella', peso: 0},
   {nome: 'Marinella', peso: 0},
   {nome: 'Lolella', peso: 0},
   {nome: 'Marachella', peso: 0},
];
// console.table(biciclette);

objNewValue(biciclette, 'peso')
console.table(biciclette);

// Creo Array vuoto per i pesi
const pesi = [];
for (let i = 0; i < biciclette.length; i++){
   const bicicletta = biciclette[i];
   const {peso} = bicicletta;
   pesi.push(peso);
}
// Math min prende il numero più basso nell'array
const minWeight = Math.min(...pesi);
const showOne = document.createElement('h3');
console.log('Peso minore:', minWeight, 'KG');
showOne.append(`Il peso più basso delle biciclette è: ${minWeight}`);
containerOne.appendChild(showOne);


//# ESERCIZIO 2
/* 
Snack2
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

BONUS
Stampare in pagina oltre che in console!
*/

// Creo array di squadre di calcio
const teams = [
   { teamName: 'AC Barbabietola', points: 0, foulAgainst: 0, },
   { teamName: 'AC Barbabietola', points: 0, foulAgainst: 0, },
   { teamName: 'AC Barbabietola', points: 0, foulAgainst: 0, },
   { teamName: 'AC Barbabietola', points: 0, foulAgainst: 0, },
   { teamName: 'AC Barbabietola', points: 0, foulAgainst: 0, },
];
// console.table(teams);

// Inserisco i valori degli oggetti nell array
for (let i = 0; i < teams.length; i++) {
   const team = teams[i];
   for (let key in team) {
      if (key == 'teamName'){
         team.teamName = prompt(`Inserisci il nome della ${i +1} squadra:`,'FC Goto');
      }
      if (key == 'points'){
         team.points = getRandomNumber(1, 45);
      }
      if (key == 'foulAgainst'){
         team.foulAgainst = getRandomNumber(1, 19);
      }
   }
}
console.table(teams);

const teamsDetails = [];
for (let i = 0; i < teams.length; i++){
   const list = document.createElement('li')
   const team = teams[i];
   const {teamName, foulAgainst} = team;
   
   list.append(`${teamName}: ${foulAgainst} Falli subiti`);
   containerTwo.appendChild(list);
   
   teamsDetails.push(teamName, foulAgainst);
}
console.table(teamsDetails);
