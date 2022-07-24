// destructing 

// destructing assignment
var a,b,rest;
a = 10;
b=20;
[a,b] = [10,20];

[a,b,...rest] = [10,20,30,40,50];

({a,b} = {a:10,b:20});

({a,b,...rest} = {a:10,b:20,c:30,d:40});
// Array destructing 

const arrConfig = ['localhost','8080','900'];
//ES5

//var server = arrConfig[0];
//var port = arrConfig[1];
//var timeout = arrConfig[2];
//ES6
const [server,port,timeout] = arrConfig;


// Object destructing

const objConfig = {
    server: 'localhost',
    port: '8080',
    timeout: '900'
}

//var server = objConfig.server;
//var port = objConfig.port;
//var timeout = objConfig.timeout;


//const {serve,port,timeout} = objConfig;

let {timeout: t} = objConfig;

console.log(t);

const days = ['monday','tuesday','wednesday','thursday','friday'];

const [,,wed,,fri] = days;












