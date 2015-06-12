# DegreeTracker
exports.get = function(req, res) {
	console.log("i got here");
	res.render('LogIn', {
		title : 'Log In'
	});
};
exports.post = function(req, res) {
	var name = req.body.name;
	console.log("Recieved POST data:" + name);
	//res.render('test', {
		//title : 'Test page designed *exculsively* for ' + name
	//});
	res.redirect('database/StudentLookUp/'+ LogIn + '/' + Password);

};
