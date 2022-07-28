/*const products = [{id:'13213',name:'Samsung seks7',price:'2500',imageUrl:'1.jpg',description:'iyi iyi',categoryid:"1"},
{id:'13214',name:'Samsung seks 8',price:'3000',imageUrl:'2.jpg',description:'iyi iyi',categoryid:"1"},
{id:'13215',name:'Samsung seks 9',price:'3500',imageUrl:'3.jpg',description:'iyi iyi',categoryid:"1"},
{id:'13216',name:'Dizüstü Pc',price:'6200',imageUrl:'3.jpg',description:'iyi iyi',categoryid:"2"},
{id:'13217',name:'Buzdolabi',price:'7500',imageUrl:'3.jpg',description:'Kotu buzdolabi',categoryid:"3"}];*/
const connection = require('../utility/database');
module.exports = class Product {

    constructor(name, price, imageUrl, description,categoryid) {
        // this.id = (Math.floor(Math.random()*99999)+1).toString();
        this.name = name;
        this.price = price;
        this.imageUrl = imageUrl;
        this.description = description;
        this.categoryid = categoryid;
    }

    saveProduct() {
        return connection.execute('INSERT INTO products (name,price,imageUrl,description, categoryid) VALUES (?, ?, ?, ?, ?)',[this.name,this.price,this.imageUrl,this.description,this.categoryid]);
    }

    static getAll() {
        //return products;
        return connection.execute('SELECT * FROM products');
    }

    static getById(id){
        //const product = products.find(i => i.id === id);
        //return product;
        return connection.execute("SELECT * FROM products WHERE products.id=?",[id]);
    }

    static Update(product){
        //const index = products.findIndex(i => i.id === product.id);

        //products[index].name = product.name;
        //products[index].price = product.price;
        //products[index].imageUrl = product.imageUrl;
        //products[index].description = product.description;
        //products[index].categoryid = product.categoryid;
        return connection.execute('UPDATE products SET products.name=?, products.price=?, products.imageUrl=?, products.description=?, products.categoryid=? WHERE products.id=?',[product.name, product.price, product.imageUrl, product.description, product.categoryid, product.id]);

    }
    static DeleteById(id){
        //const index = products.findIndex(i => i.id === id.id);
        //products.splice(index,1);
        return connection.execute('DELETE FROM products WHERE products.id=?',[id]);
    } 

    static getProductsByCategoryId(categoryId){
        //return products.filter(i => i.categoryid === categoryId);
    }
}

// const products = Product.getAll();

// const p = new Product('Samsung',2000,'1jpg','iyi telefon');
// p.saveProduct();
