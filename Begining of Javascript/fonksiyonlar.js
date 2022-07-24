
function yasHesapla(dogumYili){
    return 2018-dogumYili;

}

let val = yasHesapla(1983);

console.log(val);

function emeklilikYasi(dogumYili, isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65- yas;
    if (emeklilik>0){
        console.log(`${isim} Emekli olmaniza ${emeklilik} yil var`);

    }
    else{
        console.log("Zaten emeklisiniz");
    }
}

emeklilikYasi(2012,'ada');

// function expressionsd

const sum = function(a,b){
    
    if (typeof a === 'undefined'){
        a = 0;
    }
    if (typeof b === 'undefined'){
        b = 0;
    }
    var c = a+b;
    return c;
}
// ES& deafault parameters
const sum1 = function(a =0 ,b = 0){
    
    if (typeof a === 'undefined'){
        a = 0;
    }
    if (typeof b === 'undefined'){
        b = 0;
    }
    var c = a+b;
    return c;
}

function args(){
    console.log(arguments);
}
args(10,20,30);

function sumAll(){
    var total = 0;
    for (let i = 0; i< arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

console.log(sum(10,20));
console.log(sumAll(10,20,30,40));

