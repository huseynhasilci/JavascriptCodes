const Logger = require('./eventsModuleLogger.js')
const logger = new Logger();
// Listener kayit et

logger.on('connection',function(args){
    console.log('baglanti kuruldu',args);

});

logger.on('logout',function(){
    console.log('baglanti koptu');

});


//event'i tetikle
//emitter.emit('connection',{id:1,message:'hello'});

logger('Sadik turan logn oldu');