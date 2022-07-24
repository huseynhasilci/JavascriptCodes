

function welcome(){
    var days = ['Sunday','Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var today = new Date();

    var msg = 'Welcome. Today is ' + days[today.getDay()];
    return msg;

}

//(function(){

//})();

(function(name){
    
    var days = ['Sunday','Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday"];

    var today = new Date();

    var msg = 'Welcome. Today is ' + days[today.getDay()];
    console.log(msg);

}('cinar'));

//console.log(welcome());

