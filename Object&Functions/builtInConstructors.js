
var str1 = new String("sadik");

String.prototype.repeat = function(n){
    return new Array(n+1).join(this);
}

var arr = new Array("ocn","pcn","kcn");

Array.prototype.remove = function(member){
    var index = this.indexOf(member);

    if (index > -1){
        this.splice(index,1);
    }
    return this;
}

console.log(arr.remove("ocn"));










