// UI vars

const form = document.querySelector('form');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.getElementById('task-list');
//const items = ['item 1','item 2','item 3','item4'];
let items;

//load items
loadItems(items);


console.log(taskList);
eventListeners();
function eventListeners(){
    form.addEventListener('submit',addNewItem);

    // delete an item 
    taskList.addEventListener('click',deleteItem);

    // delete all item
    btnDeleteAll.addEventListener('click',deleteAllItems);

};
function loadItems(){

    items = getITemsFromLS();
    items.forEach(function(item){
        createItems(item);
    });
};

// set item to local storage
function setItemToLS(text){
    items = getITemsFromLS();

    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));


}
function deleteItemFromLS(text){
    items = getITemsFromLS();
    items.forEach(function(item,index){
        if (item === text){
            item.splice(index,1);
        }
    });
    localStorage.setItem('items',JSON.stringify(items));

}


function getITemsFromLS(){
    if (localStorage.getItem('items'=== null)){
        items = [];
    }
    else{
        items = JSON.parse(localStorage.getItem('items'));
    }
}

function createItems(text){
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));
    // create a
    const a = document.createElement('a');
    a.classList = 'delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML = '<i class="fas fa-times"></i>';
    
    // add a to li
    li.appendChild(a);
    
    //add li to ul 

    taskList.appendChild(li);
}

function addNewItem(e){

    if(input.value ===''){
        alert('add new item');
    }
    
    createItems(input.value);
    
    // save to LS

    setItemToLS(input.value);

    // clear input 
    input.value = "";

    e.preventDefault();
};


function deleteItem(e){
    if(e.target.className ==='fas fa-times'){
        e.target.parentElement.parentElement.remove();
        // delete item from LS 
        deleteItemFromLS(e.target.parentElement.parentElement.textContent);
    }
    e.preventDefault();

};

function deleteAllItems(e){

    if (confirm('are you sure?')){
        //taskList.childNodes.forEach(function(item){
        
        //    if (item.nodeType === 1){
        //        item.remove();
        //    }
            
        //});
        //taskList.innerHTML='';
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild);
        }
        localStorage.clear();
    }

    //taskList.innerHTML='';

    e.preventDefault();
};



