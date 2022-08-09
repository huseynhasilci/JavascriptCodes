const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const username = encodeURIComponent("huseynhasilci");
const password = encodeURIComponent("<password>");
let _db;
const mongoConnect = (callback) => {
    //MongoClient.connect('mongodb://localhost/node-app')
    MongoClient.connect('mongodb+srv://huseyinhasilci:A33d691e.@cluster0.kxfwncp.mongodb.net/node-app')
        .then((client) => {
            console.log('Connected en son');
            _db = client.db();
            callback();
        })
        .catch((err) => {
            console.log(err);
            throw err;
        })
}

const getdb = () => {
    if (_db){
        return _db;
    }
    throw 'No database';
}

exports.mongoConnect = mongoConnect;
exports.getdb = getdb;