let val;

val = document.getElementById('header');
val = document.getElementById('header').id;
val = document.getElementById('header').className;

val = document.getElementById('header');
//val = val.id;
val.style.fontSize = '45px';
val.style.color = 'red';
val.style.font = 'bold';
//val.style.display = 'none';
document.getElementById('header').innerText = 'My ToDo App';
document.getElementById('header').innerHTML = '<b> My ToDo App </b>';


console.log(val);


console.log(document.querySelector('#header'));
console.log(document.querySelector('.card-header'));
console.log(document.querySelector('h1'));
console.log(document.querySelector('div'));
document.querySelector('li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
