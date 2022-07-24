// classes


var PersonES5 = function(name,job,yearofBirth){
    this.name = name;
    this.job = job;
    this.yearofBirth = yearofBirth;
}

PersonES5.prototype.calculateAge = function(){
    return 2018 - this.yearofBirth;
}


// ES6

//class PersonES6{
//    constructor(name,job,yearofBirth){
//        this.name = name;
//        this.job = job;
//        this.yearofBirth = yearofBirth;
//    }
//    calculateAge(){
//        return 2018 - this.yearofBirth;
//    }

//    static sayHi(){
//        console.log('hello there');
//    }
//}

//let emel = new PersonES6('emel','teacher',1989);
//console.log(emel.calculateAge());
//PersonES6.sayHi();

class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x -b.x;
        const dy = a.y -b.y;
        return Math.hypot(dx,dy);
    }


}

const d1 = new Point(10,10);
const d2 = new Point(20,20);

Point.distance(d1,d2);
