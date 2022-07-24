// text

function getText(){
    fetch('text.txt').then(response =>{
        //console.log(response.text());
        return response.text();
    }).then(data =>{
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
}

//getText();
// json

function getJson(){
    fetch('products.json').then(response => {
        return response.json();
    }).then(data =>{
        console.log(data);
    }).catch(error => {
        console.log(error);
    });

}
//getJson();
// external api

function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5').then(data =>{
        return data.json();
    }).then(users =>{
        console.log(users);
    }).catch(error => {
        console.log(error);
    });
}
//getExternalApi();

function getExternalApi(){
    const url = 'https://jsonplaceholder.typicode.com/todos/';
    var data = {
        method: 'POST',
        body: JSON.stringify({
            userID:1,
            title:'title',
            body: 'sample body'
        }),
        header: new Headers({
            'content-type':'application/json'
        })
    };
    fetch(url,data).then(res => {
        console.log(res);
    });
}
getExternalApi();
