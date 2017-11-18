var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });

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