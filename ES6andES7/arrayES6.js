
const boxes = document.querySelectorAll('.box');
// ES5
let boxesES5 = Array.prototype.slice.call(boxes);

//boxesES5.forEach(function(box) {
//    box.style.backgroundColor = 'green';
//});

//for (let i=0;i<boxesES5.length;i++){
//    if(boxesES5[i].className=='box blue'){
//        continue;
//    }
//    boxesES5[i].textContent = 'Im  changed';
//    boxesES5[i].backgroundColor = 'green';
//} 

// ES6 
//Array.from(boxes).forEach(box => box.style.backgroundColor='green');

var boxesES6 = Array.from(boxes);

//for (let box of boxesES6){
//    if(box.className=='box blue'){
//        continue;
//    }
//    box.textContent = 'ım changed';
//    box.style.backgroundCOlor = 'green';
//}

// from 

//let arr = Array.from('modern ocn abi krusu');
//console.log(arr);
//console.log(boxes);

const products = [
    {name: 'Samgung S8',price:3000},
    {name: 'Samgung S7',price:3300},
    {name: 'Samgung S6',price:3200}
]

console.log(Array.from(products,prd => prd.name));
console.log(Array.from(products,prd => prd.price));
console.log(Array.from(products,prd => prd.name == 'Samgung S8')); // true olanıları dondurur
console.log(products.find(prd => prd.name == 'Samgung S8'));


let numbers = ['a','b','c'];

let entries = numbers.entries();

for (let i of entries){
    console.log(i);
}

let values = numbers.values();

for (let i of values){
    console.log(i);
}
