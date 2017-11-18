module.exports = function(app, passport) {
 
app.post('/', passport.authenticate('local-signup', {
            successRedirect: '/teetime',
 
            failureRedirect: '/'
        }
 
    ));
 
 
 
}