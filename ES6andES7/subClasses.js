// Sub Classses

// ES5
function PersonES5(firstName,LastName){
    this.firstName = firstName;
    this.LastName = LastName;
}

PersonES5.prototype.sayHi = function(){
    return 'Hello ben turkce bilmeyen'
}

function CustometES5(firstName, LastName, phone,username){
    PersonES5.call(this,firstName,LastName);
    this.phone = phone;
    this.username = username;
}
CustometES5.prototype = Object.create(PersonES5.prototype);

var customer = CustometES5('sena', 'turan','1231241','senaturan');

console.log(customer.sayHi());

//ES6
class PersonES6{
    constructor(firstName,LastName){
        this.firstName = firstName;
        this.LastName = LastName;
    }
    sayHi(){
        return 'bne turkce bilmeyen'
    }
}

class CustometES6 extends PersonES6{
    constructor(firstName,LastName,phone,username){
        super(firstName,LastName);
        this.phone = phone;
        this.username = username;
    }
    static getTotal(){
        return 1000;
    }
}

let customer1 = new CustometES6('asd','asdasda','asdasdasdasda','asdawqeqeasqwe');

console.log(customer1.sayHi());
console.log(customer1);
console.log(CustometES6.getTotal());