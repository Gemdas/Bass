var path = require("path");

var db = require('../models');
var moment = require('moment');


module.exports = function (app) {

	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "./public/index.html"));
	})
	app.get("/teetime/:day", function (req, res) {
		var id = req.query.id;
		//pull day from days
		db.day.findOne({
			where: {
				weekday: req.params.day
			}
		}).then(day => {
			var times = [];
			console.log(day);
			var open = parseInt(day.openTime.split(':')[0]) * 60 + parseInt(day.openTime.split(':')[1]);
			var close = parseInt(day.closeTime.split(':')[0]) * 60 + parseInt(day.closeTime.split(':')[1]);
			for (var x = open; x < close; x += day.iteration) {
				times.push({
					displayTime: moment(parseInt(x / 60) + ":" + (x % 60),"HH:mm").format('hh:mm a'),
					dataTime: moment(parseInt(x / 60) + ":" + (x % 60),"HH:mm").format('hhmma')
				})
			}
			res.render("index",{
				isOpen: day.isOpen,
				weekday: day.weekday,
				times,
				id
			});
		})

		//the render page, using jquery, fills in the reservations
	})

  app.get("/teetime", function(req, res) {
    res.send("Hello tee time world!");
  })

  // app.get("/fail", function(req, res) {
  //   res.send("Hello failed world!");
  // })

	app.get("/account/:id", function (req, res) {
		//render of the user page based on id
		db.user.findById(req.params.id).then(user => {
			res.render(user);
		})

	})

};
//   // adding teeTimes Route
//   app.get("/teetime", function(req, res){
//   	var array = [];
//   	for (var i = 0; i < 5; i++) {
//   		var number = {
//   			isOpen: true,
//   			openTime: i,
//   			player1: 'Jim',
//   			player2: "Bob",
//   			player3: "Tim",
//   			player4: "Sam"
//   		}
//   		array.push(number);
//   	}
//   	res.render('index', {time: array})
//   })
// };