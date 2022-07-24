// browser 


// IIFE

var controllerA = (function(){
    //scope A

    var firstname = 'Sadik';

    return {
        firstname
    }
})();



//NODEJS

//privite members
//var age = 30;
// public members
//var firstname = 'Sadik';
//var log = function(name){
//    console.log(name);
//}

//module.exports.log = log;
//module.exports.name = firstname;

//module.exports = {
//    name: firstname,
//    log: log
//}

(function(exports,require,module, __filename, __dirname){
    
    console.log(__filename); // o anki calistigimiz dosyanın filename verir
    console.log(__dirname); // o anki calistigimiz dosyanın dir verir
    var firstname = 'Sadik';
    var log = function(name){
        console.log(name);
    }
    exports = {
        firstname,
        log
    }
})();


//module.exports = {
//    firstname,
//    log
//}





