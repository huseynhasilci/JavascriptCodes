const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const admin = require('./routes/admin');
const userRoutes = require('./routes/user');
const path = require('path');

app.set('view engine','pug');
app.set('views', './views');


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(admin.routes);
app.use(userRoutes);

//app.set('title','My Site');
//console.log(app.get('title'));

app.use((req,res)=>{
    res.status(404);
    //res.sendFile(path.join(__dirname,'views','404.html'));
    res.render('404',{title:'Page Not Found'});
});

/*
app.get('/',(req,res) =>{
    res.send('Hello World');
});

app.get('/api/products',(req,res) =>{
    res.send('Urunler listelendi');
});
*/
/*
app.use('/product-list', (req,res,next)=>{
    console.log("middleware 1 calistirildi.");
    res.send('<h1>  product list page</h1>');
});
*/
/*
app.use('/', (req,res,next)=>{
    console.log("middleware 1 calistirildi.");
    next();
});
*/



app.listen(3000, () =>{
    console.log('listening on port 3000');
});





