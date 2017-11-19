module.exports = function(app, passport) {
 
app.post('/users', passport.authenticate('local-signin', {
            successRedirect: '/teetime',
 
            failureRedirect: '/fail'
        }
 
    ));
 
}