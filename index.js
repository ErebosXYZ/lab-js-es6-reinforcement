// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************

// Hem d'escriure module.exports = usersArray; al fitxer data.js perquè l'objecte s'importi correctament
let usersArray = require('./data.js');

// console.log(usersArray)
const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    userFirstNames.push(user.firstName)
  } return userFirstNames;
};

console.log(getFirstNames(usersArray));
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************
const getFullNames = arr => {
  // Your code goes here ...
  const fullNames = [];
  for (let user of arr) {
    fullNames.push(`${user.firstName} ${user.lastName}`);
  } return fullNames;
};

console.log(getFullNames(usersArray));
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  // Your code goes here ...
  // Crear un array buit on guardarem cadascun dels objectes amb les propietats que necessitem
  const usersCreditDetails = []
  // Desestructurar usersArray i crear variables amb cada propietat
  for (let user of arr) {
    const { firstName, lastName, balance } = user;
    // console.log(firstName, lastName, balance);
    // Crear objecte que conté cadascuna de les variables amb els valors de cada usuari
    const userDetails = {
      firstName,
      lastName,
      balance
    };
    // guardar cadascun dels valors que necessitem de cada objecte a dins de l'array
    usersCreditDetails.push(userDetails);
  } return usersCreditDetails;
};

console.log(getUsersCreditDetails(usersArray));
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************
// Create a function genderView() which should return two arrays new arrays femaleUsers and maleUsers. Depending on the gender, fill them with strings containing users' first and last names.

const genderView = users => {
  // Your code goes here ...
  // Crear les variables que contindran el nom i el cognom de les persones de gènere masculí i femení
  // Amb el mètode filter busquem la propietat gender de cada objecte que contingui male, i amb map creem un array que contingui un string amb el nom i cognom de les persones que compleixen aquesta propietat
  const maleUsers = users.filter(u => u.gender === 'male').map(u => `${u.firstName} ${u.lastName}`);
  const femaleUsers = users.filter(u => u.gender === 'female').map(u => `${u.firstName} ${u.lastName}`);
  // Retornem un objecte amb les dues variables com a propietats
  return {
    femaleUsers,
    maleUsers
  }
};

console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************

const data = genderView(usersArray);
const genderCount = data => {
  // Your code goes here ...
  // Si compto la llargada de cada array, em sortirà el número d'homes/dones
  let maleCounter = data.maleUsers.length;
  let femaleCounter = data.femaleUsers.length;
  return `Female: ${femaleCounter} 
Male: ${maleCounter}`;
};

console.log(genderCount(data));
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************

const promo20 = users => {
  // Your code goes here ...
};
console.log(promo20(usersArray));
// expected output:
// Dear Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]
