// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var name = req.params.name;
	var description = req.params.description;
	var imageURL = req.params.imageURL;
	console.log(data);
	res.render('index', data);
};