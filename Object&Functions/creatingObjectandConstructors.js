// object literals

//let yigit = {
//    name:'yigit',
//    yearOfBirth: 2010,
//    job: 'student'
//}


//console.log(yigit);

function Person(name,yearOfBirth,job){
    this.name= name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        return 2018 - this.yearOfBirth;
    }
}

let yigit = Person('yigit',2010,'student');
let emel = Person('emel',1989,'teacher');

console.log(yigit.name);
console.log(yigit.yearOfBirth);
console.log(yigit.job);
console.log(yigit.calculateAge());

console.log('*****************');

console.log(emel.name);
console.log(emel.yearOfBirth);
console.log(emel.job);
console.log(emel.calculateAge());

