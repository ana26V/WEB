/*
15* . Sa se scrie o funcție cu un număr nedeterminat de parametrii. 
Primul parametru va reprezenta o descriere a operației(un string),
 care va fi afisat, iar restul de parametrii vor fi numere reale. 
 Sa se inmulteasca aceste numere și sa se afiseze descrierea
// ex apelare
multiply("Inmultire", 1, 2, 3) // va produce
// afiseaza: `Inmultire: 6` 6 find 1*2*3

*/
function multiply(operatie,...nrReale){
    let rez=nrReale.reduce((total,currentElem)=> total*currentElem);
    console.log(`${operatie}: ${rez}`);

}

multiply("Inmultire", 1, 2, 3) ;
//----------------------------------------------------------------------------------------------
/*
16*. Fie următorul array
const values = [-1, 100, -500, 2, 3, 4, 5];

	Folosind spread operator, sa se afiseze cea mai mica valoare din array

*/
const values = [-1, 100, -500, 2, 3, 4, 5];
let min=Math.min(...values);
console.log(min);
//----------------------------------------------------------------------------------------------
/*
14. Sa se scrie un regex pentru a valida daca un string este un CNP valid. Un CNP este valid dacă respecta următoarele reguli:

Formatul este SAALLZZJJNNNC, unde 
S reprezinta o valoare intre 1 si 8
AA reprezinta o valoare intre 00 si 99
LL reprezinta o luna valida, valoare intre 01 si 12
ZZ reprezinta ultimele dou cifre ale anului, valoare intre 00 si 99
JJ reprezinta codul judetului, valoare între 01 și 52
NNN reprezinta orice numar intre 001 si 999
C reprezinta orice cifra intre 0 si 9

*/

const cnpRegex = /^[1-8][0-9]{2}(0[1-9]|1[0-2])(0[0-9]|1[0-9]|2[0-9]|3[0-1])[0-9]{2}[0-5][0-2][0-9]{3}[0-9]$/;

const cnp = "1970123456789";
const isValid = cnpRegex.test(cnp);
console.log(isValid); // true
