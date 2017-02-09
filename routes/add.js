var data = require("../data.json");

exports.addFriend = function(req, res) {  
	// Your code goes here
	//add new friend data into data obj
	//render index.handlebars 
	var name = req.query.name;
	var descript = req.query.description;
	var newFriend = {
		"name" : name,
		"description" : descript,
		"imageURL" : "http://lorempixel.com/400/400/people"};
	//console.log("Description " + newFriend.name);
	data.friends.push(newFriend);
	res.render('index',data);
}