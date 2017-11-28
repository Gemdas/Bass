var moment = require("moment");
module.exports = function(app, passport) {
 
// app.post('/users', passport.authenticate('local-signin', {
//             successRedirect: '/teetime/'+moment().format("dddd"),
 
//             failureRedirect: '/fail'
//         }
 
//     ));
 
// }

app.post('/users', passport.authenticate('local-signin', {
            successRedirect: '/pass',
 
            failureRedirect: '/fail'
        }
 
    ));
 

app.get('/pass', function(req, res){
	res.json(true);
});

app.get('/fail', function(req, res){
	res.json(false);
});

}