var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4 && xhr.status === 200){
        console.log('helo');
        console.log(xhr.responseText);
    }
}

xhr.open('GET','msg.txt',true);
xhr.send();
