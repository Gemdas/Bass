var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });
  app.get("/teetime/:day", function(req,res){
  	//pull day from days
  	db.day.findBy({where: {weekday: day}}).then(day =>{
  		//render day
  		res.render(day);
  	})
  	
  	//the render page, using jquery, fills in the reservations
  })
  app.get("/account/:id", function(req,res){
  	//render of the user page based on id
  	db.user.findById(req.params.id).then(user => {
  		res.render(user);
  	})
  	
  })

  // adding teeTimes Route
  app.get("/teetime", function(req, res){
  	var array = [];
  	for (var i = 0; i < 5; i++) {
  		var number = {
  			isOpen: true,
  			openTime: i,
  			player1: 'Jim',
  			player2: "Bob",
  			player3: "Tim",
  			player4: "Sam"
  		}
  		array.push(number);
  	}
  	res.render('index', {time: array})
  })
};