let cars = ["Bmw","Mercedes","Toyota"];
let people = [
    {firstName:'Ada',lastname:"Bilgi"},
    {firstName:'Keko',lastname:"Bilgi"},
    {firstName:'Seko',lastname:"Bilgi"}
]

for (let i in cars){
    console.log(`index : ${i} value : ${cars[i]} `);
}

cars.forEach(function(item){
    console.log(item);
});

for(let i in people){
    console.log(`index : ${i} value : ${people[i].lastname} `);
}

people.forEach(function(item){
    console.log(item.firstName);
});


// map : returns an array


let val = people.map(function(item){
    return item.firstName + ' ' + item.lastname;
});

console.log(val);


let numbers  =[1,2,3,4,56,8];

let num = numbers.map(function(n){
    return n*n;

});

console.log(num);
