var mongo = require("mongodb").MongoClient;
var prompt = require("prompt-sync")();
var url = "mongodb://localhost:27017/restaurant_db";


//edit a rest
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   var editChoice = prompt("Edit a restaurant");
//     collection.update({$set:{'name':editChoice, 'address':editChoice,'url':editChoice}});
//     console.log("editChoice");
// });

//delete a rest
mongo.connect(url, function(err, db){
  var collection = db.collection('restaurants');
  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
  var deleteChoice = prompt("Enter a restaurant to remove");
    collection.remove({'name':'The Blind Dog Cafe'});
    console.log("Restaruant deleted");
  });

//add a rest
// mongo.connect(url, function(err, db){
//   var collection = db.collection('restaurants');
//   //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//   var nameChoice = prompt("Add a new name");
//   var addressChoice = prompt("Add a new address");
//   var urlChoice = prompt("Add in the url");
//     collection.insert({
//     		'name':nameChoice,
//     		'address':addressChoice,
//     		'url':urlChoice
//     	});
// });

//find a rest
//mongo.connect(url, function(err, db){
//  var collection = db.collection('restaurants');
//  var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//  if(allChoice == "all"){
//    collection.find().toArray(function(err, doc){
//      console.log(doc);
//    });
//  } else {
//    console.log("Aw, you don't want to see the restaurants?");
//  }
//});

//find a rest option ii
//mongo.connect(url, function(err, db){
//  var collection = db.collection('restaurants');
  //var allChoice = prompt("Type 'all' and press enter to display all restaurants' names: ");
//  var nameChoice = prompt("Enter a restaurant");
//    collection.find({'name':nameChoice}).toArray(function(err, doc){
//      console.log(doc);
//  });
//});


