//ES5
function Game(){
    this.live = 0;
    this.addLive = function(){
        var self = this;
        this.OneUp = setInterval(function(){
            console.log(++self.live);
        })
    }
}

// ES6
function Game(){
    this.live = 0;
    this.addLive = function(){
        
        this.OneUp = setInterval(() => {
            console.log(++this.live);
        })
    }
}



