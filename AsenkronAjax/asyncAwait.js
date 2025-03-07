/*async function fn(){
    return 'hello';
    //return Promise.resolve('hello');
}

console.log(fn());

fn().then(res => console.log(res));
*/
var isError = true;

function getCategory(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            if(!isError){
                resolve('phone');
            }
            else{
                reject('error');
            }
            
        },1000);
    });
}

function getProducts(category){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(`5 products in ${category}`);
        },1000);
    });
}

async function getProduct(){
    try{
        let category = await getCategory();
        let result = await getProducts(category);
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}

getProduct();















