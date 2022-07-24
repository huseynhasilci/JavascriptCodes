// LOCAL Storage

let val;

// set item
const firstName = localStorage.setItem('firstName','tumar');
const secondName = localStorage.setItem('secondName','timaroglu');
console.log(localStorage);
let hobbies = ['sinema','araba','gezmek'];
// get item

val = localStorage.getItem('firstName');
val = localStorage.getItem('secondName');
console.log(val);

// remove item
localStorage.removeItem('firstName');

// clear butun elemenalari siler 
localStorage.clear();

// set array to storage 

localStorage.setItem('hobbies',JSON.stringify(hobbies));

val = JSON.parse(localStorage.getItem('hobbies'));

// session storage

const city = sessionStorage.setItem('city','Istanbul');
const country = sessionStorage.setItem('country','Turkey');
console.log(sessionStorage);



