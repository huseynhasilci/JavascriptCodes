let names = ["ocn","pcn","gtcn"];
let years = [2017,1999,1888];
let mix = ["ocn",1999,null,undefined];

names[names.length] = "emel";
years.push(1986); // yeni bir eleman atar
years.unshift(1986); // en basina ekler elemanı

// remove item

years.pop();
years.shift(); // en bastaki elaman gider

let index = names.indexOf("pcn"); // kacinci indexindeyse onu verir
// reverse
names.reverse();

// sort 
years.sort();

//concat
let val = years.concat(names); //  years ile name birlesti
console.log(val);


//names.splice(2,1,'keko');

// find 

// filter

function over18(year){
    let age = 2018 -year;
    return age>=18;
}

console.log(over18(1990));

console.log(names);
console.log(names.length);
console.log(typeof names);







