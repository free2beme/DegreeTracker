# DegreeTracker
var sqlite3 = require('sqlite3').verbose();
var db;

exports.get = function(req, res){
	  res.render('login', { title: 'LogIn Page' });
	};


exports.post = function(req, res){
    var name = req.body.name;
    var password = req.body.password;
    
    console.log("Received POST data: " + name + password);
       
 
    var dbpath = 'DegreeTracker-3.db';
        console.log("db ="+ dbpath);
    
    db = new sqlite3.Database(dbpath, function(err){
    	  if (err) res.render('index', {title: 'Error: ' + err}); 
    	 });
    console.log("username = " + name + ", password= " + password);
    db.all(" SELECT Username, Password FROM Users WHERE Username = '"+name+ "' AND Password = '"+password +"';" , function(err, rows) {
        if( rows.length > 0){
        	
        	res.redirect('/');
        }
        else{
        	res.redirect('/login');
        }
    	
    	
    	//res.render('table_view', {rows: rows});
        db.close();
    });
     
  
};
	
