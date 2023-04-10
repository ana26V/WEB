
//8. Calculati suma fiecărui element pozitiv dintr-un array. Dacă nu exista nici un număr pozitiv sau array-ul este gol, suma va fi 0.
const input = [1, -4, 12, 0, -3, 29, -150]; // rezulta 42 ( 1 + 12 + 29);

const inputPositive = input.filter((nr) => nr >= 0);

const sumOfInputs = inputPositive.reduce(
  (total, currentElement) => total + currentElement,
  0
);
console.log(sumOfInputs);
//-------------------------------------------------------------------------------------
/* 9*. Folosind map,filter si reduce,
 calculati media tuturor notelor pentru fiecare student, apoi filtrati studenții care au media mai mare de 90*/
const students = [
  { name: "Ionut", scores: [90, 85, 92] },
  { name: "Gigel", scores: [75, 80, 85] },
  { name: "Marius", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 100] },
];

const incerc = students.map(function (stud) {
  let sum = stud.scores.reduce(
    (total, currentElement) => total + currentElement,
    0
  );
  let average = sum / stud.scores.length;
  return { name: stud.name, media: average };
});
const filteredIncerc = incerc.filter((stud) => stud.media >= 90);
console.log(filteredIncerc);

//-------------------------------------------------------------------------------------
  /* 10.
1.1 Verifica daca numele “Daniel” se afla pe lista
1.2 Dacă numele “Daniel” se afla pe lista, modifica string-ul, astfel incat în locul lui “Daniel” să fie “Gigel”
*/
let badKids =
  "Lista copiilor pedepsiti este urmatoarea: Manuela, Daniel, Vicentiu";

if (badKids.includes("Daniel")) badKids = badKids.replace("Daniel", "Gigel");


console.log(badKids);
//-------------------------------------------------------------------------------------
//11. Sa se calculeze media aritmetica a notelor

const testGrades = "9.80/6.85/9.10/7.80/8.20";


const testGradeArray = testGrades.split("/").map(parseFloat);
console.log(testGradeArray);

const avgGrades = testGradeArray.reduce(function (total, currentElement) {
  return total + currentElement;
});
console.log(avgGrades / testGradeArray.length);
//---------------------------------------------------------------

//12. 3.1 Destructureaza din obiect următoarele proprietăți: name, price, currency
	//3.2 Folosind proprietatile destructurate, afișează un mesaj în forma “Produsul {name} are pretul {price}”



const props = {
  name: "Minge fotbal Nike T90",
  price: 220,
  currency: "RON",
  brand: "Nike",
};
({ name, price, currency } = props); //the declaration was marked as deprecated here ?
console.log(name + "| " + price + "| " + currency);

//fara warning:
const { name: propsName, price: propsPrice, currency: propsCurrency } = props;
console.log(propsName + "| " + propsPrice + "| " + propsCurrency);

console.log(`Produsul{${propsName}} are pretul{${propsPrice}}`);

//---------------------------------------------------------------
//13. Creeaza un obiect nou, care sa contina proprietățile obiectelor props și aditionalProps
const additionalProps = {
  isAvailable: true,
};

const allProps = Object.assign({}, props, additionalProps);
console.log(allProps);