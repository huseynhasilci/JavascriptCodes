
let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //this.calculateAge = function(){
    //    return 2018 -this.yearOfBirth;
    //}


}

Person.prototype.calculateAge = function(){
    return 2018 -this.yearOfBirth;
}

Person.prototype.getName = function(){
    return this.name;
}

let emel = Person('emel',1989,'teacher');



console.log(emel.calculateAge());
console.log(emel.getName());
console.log(emel);

console.log(emel.hasOwnProperty('name')); // icerisinde girilen degerle ayni variable var mi diye kontrol ediyor true ya da false donuyor.








