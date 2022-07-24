const Person = {
    firstName: 'Sadik',
    lastName: 'Turan',
    get fullName(){
        return `${Person.firstName} ${Person.lastName}`
    },
    set FullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    //getfullName: function(){
    //    return `${Person.firstName} ${Person.lastName}`
    //},
    //setFullName: function(value){
    //    const parts = value.split(' ');
    //    this.firstName = parts[0];
    //    this.lastName = parts[1];
    //}
}
Object.defineProperty(Person,'fullName',{
    get function(){
        return `${Person.firstName} ${Person.lastName}`
    },
    set function(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
})

Object.defineProperty(Person,'age',{
    value:50,
    writable: false // true da olur 
})

Person.age = 55;

//Person.setFullName('anancan yilmaz');
//console.log(Person.getfullName());

//Person.FullName = 'anancan yilmaz';
//console.log(Person.fullName);
console.log(Person);
