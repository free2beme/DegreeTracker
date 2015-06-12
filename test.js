# DegreeTracker
exports.get = function(req, res) {
	res.render('test', {
		title : 'Test Page'
	});
};
exports.post = function(req, res) {
	var name = req.body.name;
	console.log("Recieved POST data:" + name);
	res.render('test', {
		title : 'Test page designed *exculsively* for ' + name
	});
	res.redirect('database/course/'+ LogIn + '/' + Password);

};
