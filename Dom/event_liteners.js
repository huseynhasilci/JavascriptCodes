const btn = document.querySelector('#btnDeleteAll');
const btn2 = document.querySelector('#btnAddNewTask');
//btn.addEventListener('click',function(){
//    console.log('btn clicked');
//});

//btn.addEventListener('click',btnClick);
//btn2.addEventListener('click',btnClick);

btn.addEventListener('click',function(e){
    
    let val;
    val = e;
    
    val = e.target; // obje hangi butonun tiklandigini verir.
    val = e.target.dispatchEvent;
    val = e.target.classList;
    val = e.type;
    console.log(val);
    e.preventDefault();
});

function btnClick(){
    console.log('btn clicked');
}














