var express = require('express');
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var app = express();
var url = 'mongodb://localhost:27017/jdproject';
mongoClient.connect(url, function(err, db) {
    createDocuments(db, function() {
        db.close();
    });
});
var createDocuments  = function(db, callback) {
    var collection = db.collection("jduser");
    collection.insert([
        {firstname : "amulya",lastname: "komatineni",emailid: "amulya@gmail.com"},
        {firstname : "sravani",lastname: "komatineni",emailid: "sravani@gmail.com"},
        {firstname : "kavya",lastname: "Thota",emailid: "hema@gmail.com"},
    ], function(err, result) {
        callback(result);
    });
    var server= app.listen(9000, function(){
        console.log('server running on port 9000');
    });
    app.get('/', function(req, res) {
        res.send('welcome to mongodb application');
    });
}