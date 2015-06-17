# DegreeTrackerexports.index = function(req, res){
  res.render('index', { title: 'Degree Tracker' });
};

exports.post = function(req, res){
    var Student_ID = req.body.Student_ID;
    var Semester_ID = req.body.Semester_ID;
    
    console.log("Received POST data: " + Student_ID + Semester_ID);
};
