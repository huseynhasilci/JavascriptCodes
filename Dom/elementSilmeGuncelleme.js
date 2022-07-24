const taskList = document.querySelector('#task-list');

//removing elements
//taskList.remove();
//taskList.childNodes[7].remove();
//taskList.children[3].remove();
//taskList.removeChild(taskList.children[3]);

// removing attributes

//taskList.children[0].removeAttribute('class'); --> class attributesini sildi

//for(let i = 0; i< taskList.children.length;i++){
//    taskList.children[i].removeAttribute('class');
//}

// replacing elements

const cardHeader = document.querySelector('.card-header');

const h2 = document.createElement('h2');
h2.setAttribute('class','card-headr');
h2.appendChild(document.createTextNode('My list'));

const parent = document.querySelector('.card');
parent.replaceChild(h2,cardHeader);




console.log(taskList);

