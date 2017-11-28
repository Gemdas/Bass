var nodemailer = require('nodemailer');
var db = require('../models');
var url = require("url")
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'bassteetime@gmail.com',
		pass: 'frankenstein'
	}
});
module.exports = function (app) {
	app.post("/invite", function(req, res){
		var email=req.body.email;
		var server= req.body.server;
		if(email.indexOf("@")===-1){
			res.json({
				message:"not valid email",
				isSuccess:false
			})
		}
		db.user.findOne({
			where:{
				email: req.body.email
			}
		}).then(user =>{
			if(user){
				res.json({
					isSuccess:false,
					message:"user already exists"
				})
			}
			else{
				var mailOptions = {
					from: 'bassteetime@gmail.com',
					to: email,
					subject: 'New User Invite',
					text: server+"/newUser?email="+email
				};
				transporter.sendMail(mailOptions, function(error, info){
					if (error) {
						console.log(error);
					} else {
						console.log('Email sent: ' + info.response);
					}
				});
			}
		})
	})
}