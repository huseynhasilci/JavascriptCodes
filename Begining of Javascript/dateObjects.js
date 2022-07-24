let d = new Date();
let birthDay = new Date(1990,1,5,);


// Set methods
d.setFullYear(2020);
d.setMonth(5);
d.setDate(20);
d.setHours(10);
d.setMinutes(45);
d.setSeconds(20);

// get methods 
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getSeconds());

console.log(d.getFullYear() - birthDay.getFullYear());
console.log(d.setMonth() - birthDay.getMonth());
console.log(d.setDate() - birthDay.getDate());

console.log(d);
console.log(typeof d);














