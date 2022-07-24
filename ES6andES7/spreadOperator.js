function getTotal(a,b,c){
    return a+b+c;
}

let number = [10,20,30];

//ES5

console.log(getTotal.apply(null,number));
//ES6
console.log(getTotal(...number));


let arr1 = ['two','three'];
let arr2 = ['one','four','five'];

arr1.push(...arr2);
arr1.unshift(...arr2);

let arr3 = ['one',...arr1,'four','five'];

console.log(arr1);

let h1 = document.querySelector('h1');
let divs = document.querySelectorAll('div');

let tags = [h1,...divs];

tags.forEach(tag => tag.style.color='red');

console.log(tags);