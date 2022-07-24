

//ES5

function sum(){
    //console.log(arguments);
    let arr = Array.prototype.slice.call(arguments);
    console.log(arr);
    let result = 0;
    arr.forEach(function(item){
        result += item;
    })
    return result;
    
}
console.log(sum(10,20,30));

//ES6
function sumES6(...arr){
    let result = 0;
    arr.forEach(item=>result+=item);
    return result;
}


console.log(sumES6(10,20,30));

function isDriver(...years){
    years.forEach(year => console.log(2018-year>=18));
}
console.log(isDriver(1990,2002,1983,2005));


