/* 3. Folosind metodele de pe obiectul Date, afișează data curentă în următorul format: HH:MM:SS
Formatul de mai sus descrie practic ce va vedea utilizatorul, ex: 17:03:30
*/
const acum = new Date();

let hours = acum.getHours().toString().padStart(2, "0");
let minutes = acum.getMinutes().toString().padStart(2, "0");
let seconds = acum.getSeconds().toString().padStart(2, "0");
console.log(hours + ":" + minutes + ":" + seconds);
//-------------------------------------------------------------------------------------
/*Bonus:
  - Afișați ziua curentă în formatul MMMM DD YYYY, HH:MM:SS
  EX: January 21 2023, 17:03:30
*/
/*
//metoda toLocaleDateString
const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
let month=amu.toLocaleDateString('en-US', options);
console.log(month); */

const currentDate = new Date();
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monthName = months[currentDate.getMonth()];
const dayName = currentDate.getDate();
const yearName = currentDate.getFullYear();

const theFinalDate = `${monthName} ${dayName} ${yearName} , ${hours}:${minutes}:${seconds}`;
console.log(theFinalDate);
//-------------------------------------------------------------------------------------

// Calculati și afișați cat timp a trecut de la o data până în data de azi
function calculateTime(someDate) {
  const rightNow = currentDate.getTime(); //data curenta in milisec.
  const diff = currentDate.getTime() - someDate.getTime(); //data curenta in milisec.- data parametru in milisec.
  const msPerSecond = 1000;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerYear = msPerDay * 365;

  if (diff < msPerMinute)
    return "acum " + Math.round(diff / msPerSecond) + " secunde";
  else if (diff < msPerHour)
    return "acum " + Math.round(diff / msPerMinute) + " minute";
  else if (diff < msPerDay)
    return "acum " + Math.round(diff / msPerHour) + " ore";
  else if (diff < msPerYear)
    return "acum " + Math.round(diff / msPerDay) + " zile";
  else return "acum " + Math.round(diff / msPerYear) + " ani";
}
console.log(calculateTime(new Date("2020-01-01")));
