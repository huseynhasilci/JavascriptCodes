const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

// const connection = require('./utility/database');
const sequelize = require('./utility/database');

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const errorController = require('./controllers/errors');
const Category = require('./models/category');
const Product = require('./models/product');
const User = require('./models/user');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/admin', adminRoutes);
app.use(userRoutes);
/*
connection.execute('SELECT * FROM products')
    .then((result)=>{
        console.log(result[0]);
    }).catch((err)=>{
        console.log(err);
    });
*/
/*sequelize
    .authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch((err)=>{
        console.error('Unable to connect to the database:', err);
    });
 */   

    


app.use(errorController.get404Page);
// burada one to many iliskisini kurduk alttaki kodlar sayesinde 
Product.belongsTo(Category,{
    foreignKey: {
        allowNull:false
    }
});
Category.hasMany(Product);

Product.belongsTo(User);
User.hasMany(Product);

sequelize
    //.sync({force:true})
    .sync()
    .then(()=>{

        User.findByPk(1)
            .then((user) => {
                if(!user){
                    User.create({name:'sadikturan',email:'email@gmail.com'});
                }
                return user;
            })
            .then((user) => {
                Category.count()
                .then((count) =>{
                    if(count === 0){
                        Category.bulkCreate([
                            {name:'Telefon', description: 'Telefon Kategorisi'},
                            {name:'Bilgisayar', description: 'Bilgisayar Kategorisi'},
                            {name:'Elektronik', description: 'Elektronik Kategorisi'}
                        ]);
                    }
                })
            })
            .catch((err)=>{

            });
        
        
    })
    .catch((err)=>{
        console.log(err);
    });

app.listen(3000, () => {
    console.log('listening on port 3000');
});
