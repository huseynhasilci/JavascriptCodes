var welcome = function(a,b) {
    console.log('Welcome '+ this.name)+ '. Are you interested in '+ a + ' and '+b;
}

var yigit = {
    name: 'Yigit'
}

var ada = {
    name:'ada'
}

welcome.call(yigit,'asp.net','angular');
welcome.call(ada,'asp.net','angular');

welcome.apply(yigit,['asp.net','angular']);
welcome.apply(ada);
//welcome();
welcomeYigit = welcome.bind(yigit);
welcomeYigit('asp.net','ada');

welcomeAda = welcome.bind(ada);
welcomeAda('asp.net','angular');
