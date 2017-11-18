var path = require("path");

module.exports = function (app) {

	app.get("/", function (req, res) {
		res.sendFile(path.join(__dirname, "./public/index.html"));
	})
	app.get("/teetime/:day", function (req, res) {
		//pull day from days
		db.day.findBy({
			where: {
				weekday: req.params.day
			}
		}).then(day => {
			var times = [];
			var open = parseInt(day.openTime.split(':')[0]) * 60 + parseInt(day.openTime.split(':')[1]);
			var close = parseInt(day.closeTime.split(':')[0]) * 60 + parseInt(day.closeTime.split(':')[1]);
			for (var x = open; x < close; x += day.iteration) {
				times.push({
					time: parseInt(x / 60) + ":" + (x % 60)
				})
			}
			res.render({
				isOpen: day.isOpen,
				weekday: day.weekday,
				times
			});
		})

		//the render page, using jquery, fills in the reservations
	})
	app.get("/account/:id", function (req, res) {
		//render of the user page based on id
		db.user.findById(req.params.id).then(user => {
			res.render(user);
		})

	})

};