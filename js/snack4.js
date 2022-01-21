/* SNACK 4
Abbiamo un elenco degli studenti di una facoltà, identificati da id, nome e somma totale dei loro voti di esame...
1. dobbiamo creare una lista contenente delle targhe (stringhe) con il loro nome in maiuscolo
ES (marco de iulio => Marco de iulio);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120
BONUS  nei nomi sulle targhe l'iniziale di ogni parola deve essere maiuscola
ES.: (marco de iulio  => Marco De Iulio)
*/

const studentClass = [
   {
      name: "Pero caduto",
      id: "104",
      sumOfVotes: "88",
   },
   {
      name: "Pierino maestra",
      id: "95",
      sumOfVotes: "69",
   },
   {
      name: "Tesla gas",
      id: "136",
      sumOfVotes: "75",
   },
   {
      name: "Gianni",
      id: "145",
      sumOfVotes: "88",
   },
   {
      name: "cipro",
      id: "126",
      sumOfVotes: "50",
   },
   {
      name: "Mclaren cope",
      id: "130",
      sumOfVotes: "92",
   },
   {
      name: "Luigi bros",
      id: "118",
      sumOfVotes: "83",
   },
   {
      name: "Ned Needed",
      id: "55",
      sumOfVotes: "65",
   },
   {
      name: "Nate jones",
      id: "196",
      sumOfVotes: "96",
   },
   {
      name: "Mario bros",
      id: "190",
      sumOfVotes: "64",
   },
];

const higherVotes = studentClass.filter(({ sumOfVotes }) => sumOfVotes > 70);

// console.table(higherVotes);

const higVotesAndId = studentClass.filter(
   ({ sumOfVotes, id }) => sumOfVotes > 70 && id > 120
);

// console.table(higVotesAndId);

// .charAt(0).toUpperCase() + name.slice(1).toLowerCase()

const nameStudents = studentClass.map(({ name }) => {
   const word = name.split(" ");
   console.log(word);
   let moreWords = "";
   for (let i = 0; i < word.length; i++) {
      let words =
         word[i].charAt(0).toUpperCase() + word[i].slice(1).toLowerCase();
      // return word[].toUpperCase() + name.substring(1);
      moreWords += " " + words;
   }
   return moreWords;
});
console.table(nameStudents);
