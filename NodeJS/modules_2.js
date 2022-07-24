
//var lastName = 'Turan';

//console.log(firstname);
//console.log(lastName);

var controllerB = (function(){
    var firstname = 'Turan';
    return {
        firstname
    }
})();


//console.log(controllerA.firstname);
//console.log(controllerB.firstname);

const modules = require('./modules.js');
modules.log('Çınar');
console.log(modules.name);