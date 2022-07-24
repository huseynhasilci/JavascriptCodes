// event bubbling

const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//form.addEventListener('click',function(e){
//    console.log('form');
//    e.stopPropagation(); // yalnizca tiklanilan yeri alir diger seyleri almaz
//});

//cardBody.addEventListener('click',function(e){
//    console.log('form');
//    e.stopPropagation();
//});

//card.addEventListener('click',function(e){
//    console.log('form');
//    e.stopPropagation();
//});

//container.addEventListener('click',function(e){
//    console.log('form');
//    e.stopPropagation();
//});

// Event capturing

form.addEventListener('click',function(e){
    console.log('form');
    e.stopPropagation(); // yalnizca tiklanilan yeri alir diger seyleri almaz
},true);

cardBody.addEventListener('click',function(e){
    console.log('form');
    e.stopPropagation();
},true);

card.addEventListener('click',function(e){
    console.log('form');
    e.stopPropagation();
},true);

container.addEventListener('click',function(e){
    console.log('form');
    e.stopPropagation();
},true);

const deleteItems = document.querySelectorAll('.fa-times');

deleteItems.forEach(function(item){
    item.addEventListener('click',function(e){
        console.log(e.target);
    })
});

console.log(deleteItems);

const ul = document.querySelector('ul');

ul.addEventListener('click',function(e){
    
    if (e.target.className === 'fas fa-times'){
        console.log('icon');
        console.log(e.target);
        console.log(e.target.parentElement);
        console.log(e.target.parentElement.parentElement);
        e.preventDefault();
        e.target.parentElement.parentElement.remove();
    }
    
    console.log(e.target);
})
