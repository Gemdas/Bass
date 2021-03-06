var db = require('../models');

module.exports = function (app) {
	//GET ALL Days
	app.get("/days", function (req, res) {
		db.day.findAll({}).then(days => {
			res.json(days);
		});
	})
	//PUT Days
	app.put("/days/:weekday", function (req, res) {
		db.day.update({
			openTime: req.body.openTime,
			closeTime: req.body.closeTime,
			iteration: req.body.iteration,
			isOpen: req.body.isOpen
		}, {
			where: {
				weekday: req.params.weekday
			}	
		}).then(day => {
			res.json(day);
		}).catch(err => {
			res.json(err);
		})
	})

	app.get("/roster", function (req, res) {
		db.user.findAll({}).then(users => {
			res.json(users);
		})
	})

	app.put("/add-admin/:id", function (req, res) {
		db.user.update({
			isAdmin: true
		}, {
			where: {
				id: req.params.id
			}
		}).then(user => {
			res.json(user)
		}).catch(error => {
			res.json(error)
		})
	})

	app.put("/remove-admin/:id", function (req, res) {
		db.user.update({
			isAdmin: false
		}, {
			where: {
				id: req.params.id
			}
		}).then(user => {
			res.json(user)
		}).catch(error => {
			res.json(error)
		})
	})

	//GET ALL Users
	app.get("/users", function (req, res) {
		db.user.findAll({}).then(users => {
			res.json(users);
		});
	})
	//GET User
	app.get("/users/:id", function (req, res) {
		db.user.findById(req.params.id).then(user => {
			res.json(user);
		});
	})
	//GET User Email
	app.post("/users/email", function(req, res) {
		console.log("we are here")
		email = req.body.email;
		console.log(email);
		db.user.findOne({
			where: {
				email
			}
		}).then(user => {
			res.json(user.id);
		})
	});
	//POST User
	app.post("/users", function (req, res) {
		db.user.create({
			email: req.body.email,
			password: req.body.password,
			firstName: req.body.firstName,
			lastName: req.body.lastName
		}).then(user => {
			res.json(user);
		}).catch(err => {
			res.json(err);
		})
	})
	//PUT user password
	app.put("/users/password", function (req, res) {
		db.user.update({
			password: req.body.password,
		}, {
			where:{
				email: req.body.email,
			}
		}).then(user => {
			res.json(user);
		}).catch(err => {
			res.json(err);
		})
	})
	//PUT users isAdmin
	app.put("/users/admin", function (req, res) {
		db.user.update({
			isAdmin: true,
		}, {
			where:{
				email: req.body.email,
			}
		}).then(user => {
			res.json(user);
		}).catch(err => {
			res.json(err);
		})
	})
	//GET ALL Reservation
	app.get("/reservations", function (req, res) {
		db.reservation.findAll({}).then(reservations => {
			res.json(reservations);
		});
	})
	//GET Reservation
	app.get("/reservations/:id", function (req, res) {
		db.reservation.findById(req.params.id).then(reservation => {
			res.json(reservation);
		});
	})
	//POST Reservation
	app.post("/reservations", function (req, res) {
		var secondPlayerName = req.body.secondPlayerName
		var thirdPlayerName = req.body.thirdPlayerName
		var fourthPlayerName = req.body.fourthPlayerName
		var isFull = false;
		if (secondPlayerName === '') {
			secondPlayerName = undefined;
		}
		if (thirdPlayerName === '') {
			thirdPlayerName = undefined;
		}
		if (fourthPlayerName === '') {
			fourthPlayerName = undefined;
		} else {
			isFull = !isFull;
		}
		db.reservation.create({
			teeTime: req.body.teeTime,
			weekday: req.body.weekday,
			firstPlayerName: req.body.firstPlayerName,
			secondPlayerName,
			thirdPlayerName,
			fourthPlayerName,
			isFull
		}).then(reservation => {
			res.json(reservation)
		}).catch(err => {
			res.json(err)
		})
	})
	//PUT Reservation
	app.put("/reservations/:id", function (req, res) {
		var secondPlayerName = req.body.secondPlayerName
		var thirdPlayerName = req.body.thirdPlayerName
		var fourthPlayerName = req.body.fourthPlayerName
		var isFull = false;
		if (secondPlayerName === '') {
			secondPlayerName = undefined;
		}
		if (thirdPlayerName === '') {
			thirdPlayerName = undefined;
		}
		if (fourthPlayerName === '') {
			fourthPlayerName = undefined;
		} else {
			isFull = !isFull;
		}
		db.reservation.create({
			teeTime: req.body.teeTime,
			weekday: req.body.weekday,
			firstPlayerName: req.body.firstPlayerName,
			secondPlayerName,
			thirdPlayerName,
			fourthPlayerName,
			isFull
		}, {
			where: {
				id: req.params.id
			}
		}).then(reservation => {
			res.json(reservation)
		}).catch(err => {
			res.json(err)
		})
	})
}