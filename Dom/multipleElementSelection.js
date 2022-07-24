
let val;


//val = document.getElementsByClassName('list-group-item');
//val = val[2];

//val[1].style.color = 'blue';
//val[1].style.fontSize = '25px';

//for (let i = 0; i< val.length; i++){
//    console.log(val[i]);
//}

val = document.getElementsByTagName('li');
val = document.getElementById('task-list');
val = document.getElementsByTagName('a');

val = document.querySelector('li:nth-child (even)');

val.forEach(function (item) {
    item.style.background = '#ccc';
});



console.log(val);



















