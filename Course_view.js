# DegreeTracker
/**
 * New node file
 */
var sqlite3 = require('sqlite3').verbose();
var db;

exports.get = function(req,res){
	 console.log("Serving " + __filename);
	 
	 var db_name = req.params.db_resource;
	 console.log("db ="+ db_name);
	 var table = req.params.table;
	 console.log("table ="+ table);
	 
	 var dbpath = db_name;
	 db = new sqlite3.Database(dbpath, function(err){
		 if (err){
			 res.render( 'index', {title:'Error: ' + err});
		 }
	 });
	 
	
	 db.run("DELETE FROM TempC;", function(err){
	        if (err){
	            res.render('index',{title:'Error: ' + err});
	        }
	    });
	    
	    db.run("INSERT INTO TempC SELECT b.Course_ID, b. Pre_req_ID FROM Transcript a, Pre_Req b WHERE b.Pre_Req_ID = (SELECT a.Past_Course_ID FROM Transcript WHERE Letter_Grade != 'D' OR Letter_Grade != 'D-' OR Letter_Grade != 'F' AND Student_ID = 900654897) GROUP BY Course_ID",function(err){
	        if(err){
	            res.render('index',{title:'Error: ' + err});
	        }
	    });
	    
	    db.all("SELECT b.CRN, b.Course_ID, b.Title, b. CreditHours, b.Days, b.Times, b.BldgRoom, b.Instructor, b.StartDate, b.EndDate,b.Semester_ID FROM TempC a, Courses b WHERE b.Course_ID = a.Pre_Course_ID AND Semester_ID = 'FALL2015';", function(err, rows){
	    	var message = rows.length > 0 ? "Viewing " + db_name + '/' + table: "No data found in table '" + table + "' in " + db_name;
	        res.render('course_view', {message: message, rows: rows});
	        db.close();
	        });
};
