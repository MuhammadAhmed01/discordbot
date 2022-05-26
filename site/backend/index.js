// Initialize and require express package
const express = require("express")
// Initialize app, instance of our express server
const app = express();
// Initialize and require passwort package
const passport = require("passport");
// passport configuration
const passportSetup = require("./config/passport-setup");


// Initialize port at which the express server will run
const port = 4000;

app.use(passport.initialize());

app.get("/auth/discord", passport.authenticate("discord", { permissions: 8}));
// callback handler
app.get("/auth/discord/callback", passport.authenticate('discord', {
    failureRedirect: '/'
}), function (req, res) {
    res.redirect("http://localhost:3000/")
});

// Calling listen function on app object 
app.listen(port, () => console.log(`Server is running on port ${port}`))