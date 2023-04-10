/*Creați un obiect care descrie să descrie o masina. Obiectul va avea următoarele proprietăți:  
brand , model,  year, price, km bord

1. Aplicati următoarele operații pe obiect:
  1.1. Modificați numărul de km cu o valoare mai mica
  1.2. Adaugati o proprietate nouă, description, cu o valoare corespunzătoare
  1.3. Stergeti proprietatea description
  Cerinte optionale:
	- Rezolvați cerințele de mai sus cu ajutorul unei funcții, care ia ca parametru o masina
	- Creati o functie createOrDeleteProp, care sa adauge/modifice sau sa stearga o proprietate data ca parametru
	EX de apel:
 	createOrDeleteProp("description","Agil si Robust"); //creaza sau modifica proprietatea `description`
 	createOrDeleteProp("description", undefined); // sterge proprietatea
 	createOrDeleteProp("description"); // sterge proprietatea, fara sa specificam valoarea undefined*/

//1.1
let car = {
    brand: "Ford",
    model: "Fiesta",
    year: "2008",
    price: 1000,
    kmBord: 80000,
  };
  console.log(car);
  
  car.description = "random"; //1.2
  delete car.description; //1.3
  
  
  function createOrDeleteProp(proprietate, choice) {
    //initial am  utilizat sintaxa cu punct pentru a accesa proprietatea
    //si la apelarea createOrDeleteProp("descriere", "Agil și Robust");
    //obiectul nou creat avea proprietatea noua cu numele "proprietate" in loc de "descriere"
  
    if (choice !== undefined) car[proprietate] = choice;
    else {
      delete car[proprietate];
    }
  }
  createOrDeleteProp("description", "Agil si Robust");
  console.log(car);
  
  /*2. Faceti o functie tuneCar, care ia ca parametru o masina.
   Funcția va returna un obiect nou, 
  fără să îl modifice pe cel trimis ca parametru.
  Obiectul returnat de funcția va avea km injumatatiti, iar prețul cu 50% mai mare.
  Puteți pasa la funcție obiectul creat la punctul anterior
  Grija mare sa nu modificati obiectul trimis ca parametru!
  */
  
  function tuneCar(car) {
    //let newCar = {...car};//folosind operator "spread"
    let newCar = Object.assign({}, car);
  
    newCar["kmBord"] /= 2;
    newCar["price"] += newCar["price"] / 2;
    return newCar;
  }
  let tunedCar = tuneCar(car);
  
  console.log(tunedCar);
  console.log(car);
  
  