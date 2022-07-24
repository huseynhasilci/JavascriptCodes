var products = [
    {id: 1,name:'samsung s8',price:3000},
    {id: 2,name:'samsung s7',price:3000},
    {id: 3,name:'samsung s6',price:3000},
];

let added = true;
function addProduct(prd,callback){

    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            products.push(prd);
            let added = true;
            if(added){
                resolve();
            }
            else{
                reject('hata : 500');
            }
        });
    });

    //if(added){
    //    setTimeout(() =>{
    //        products.push(prd);
    //        callback(null,prd);
    //    },2000);
    //}
    //else{
    //    callback('500',prd);
    //}

    
}

function getProducts(){
    setTimeout(() =>{
        products.forEach(p =>{
            console.log(p.name);
        });
    },1000);
}

//addProduct({id:4,name:'Samsug s5',price:2323},getProducts);

//addProduct({id:4,name:'Samsug s5',price:2323},function(err,data){
//    if(err){
//        console.log('hata : ' +err);
//    }
//    else{
//        console.log(data);
//    }
//});

addProduct({id:4,name:'Samsug s5',price:2323}).then(getProducts).catch(function(err){
    console.log(err);
});