const http = require('http');
const fs = require('fs')
const server = http.createServer((req,res) =>{
    //res.setHeader('Content-Type','text/plain');
    /*
    res.setHeader('Content-Type','application/json'); //ayni zamanda html de gonderilebilir
    res.statusCode = 200;
    res.statusMessage = 'OKCAN';

    //res.write('Hello World');
    res.write(JSON.stringify({name:'OCN YLMZ',price:7000}));
    res.end();
    */
    fs.readFile('indexx.html',function(error,file){
        if(error){
            res.setHeader('Content-Type','text/plain'); //ayni zamanda html de gonderilebilir
            res.statusCode = 404;
            res.statusMessage = 'YARRAYEDIN Not Found';
            res.end('Dosya bulunamadi');
        }
        else{
            res.setHeader('Content-Type','text/html'); //ayni zamanda html de gonderilebilir
            res.statusCode = 200;
            res.statusMessage = 'Helal lan ocanfi';
            res.end(file);
        }
    });

});
/*
server.on('request',(req,res) =>{

})
*/

server.listen(3000);
console.log('listening port on 3000');