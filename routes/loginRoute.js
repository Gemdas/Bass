module.exports = function(app, passport) {
app.post('/validate', passport.authenticate('local-signin', {
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