const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const accountRouter = require('./routes/account');

const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongodbStore = require('connect-mongodb-session')(session);

const errorController = require('./controllers/errors');


const User = require('./models/user');
var store = new mongodbStore({
    uri: 'mongodb+srv://huseyinhasilci:A33d691e.@cluster0.kxfwncp.mongodb.net/node-app',
    collection: 'mySessions'
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: 'keybord cat',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge:36000
    },
    store:store
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next) => {
    User.findOne({name:'sadikturan'})
        .then(user => {
            req.user = user;
            
            next();
        })
        .catch(err => {
            console.log(err);
        });
});

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);
app.use(accountRouter);

app.use(errorController.get404Page);



mongoose.connect('mongodb+srv://huseyinhasilci:A33d691e.@cluster0.kxfwncp.mongodb.net/node-app')
    .then(() => {
        console.log('Connected to mongodb');
        app.listen(3000);

    })
    .catch(err=>{
        console.log(err);
    });
