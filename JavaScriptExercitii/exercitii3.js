
/*7. Fie următorul array:
Folosind metode care nu modifica array-ul, rezolvați următoarele probleme:
1. Sa se afiseze produsul cu numele “The Guardian”
2. Folosind filter, returnati un array care contine doar produsele de la “Hop Hooligans”
3. Folosind filter, returnati un array care sa nu contina produsul cu id-ul 111
4. Calculati suma prețurilor din array
5. Fara sa modificati array-ul initial, returnati un array nou, în care fiecare element va avea o proprietate nouă numita “isFavorite”, cu valoarea false. 

*/
const products = [
    {
      id: 67,
      name: "Firestrata",
      price: 26,
      brewery: "Hop Hooligans",
    },
    {
      id: 212,
      name: "Punch the Clock",
      price: 21,
      brewery: "Bereta",
    },
    {
      id: 111,
      name: "The Guardian",
      price: 21,
      brewery: "Noah",
    },
    {
      id: 345,
      name: "Pudge",
      price: 30,
      brewery: "Hop Hooligans",
    },
  ];
  
  console.log(products);
  console.log(products.find((p) => p.name === "The Guardian")); //->1
  console.log(products.filter((p) => p.brewery === "Hop Hooligans")); //->2
  console.log(products.filter((p) => p.id !== 111)); //->3
  
  //->4.
  const sum = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);
  console.log(sum);
  
  //->5
  //let arrayCopy=products.map(p => ({...products,isFavourite: false}));
  let arrayCopy = products.map((product) =>
    Object.assign({}, product, { isFavourite: false })
  );
  console.log(arrayCopy);