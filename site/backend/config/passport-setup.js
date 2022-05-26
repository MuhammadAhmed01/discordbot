// Initializing and require passport
const passport = require("passport");
var DiscordStrategy = require("passport-discord").Strategy;
const { clientID, clientSecret } = require("../../../config.json");
// Serialization function
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.use(
    new DiscordStrategy({
        clientID: clientID,
        clientSecret: clientSecret,
        callbackURL: 'http://localhost:4000/auth/discord/callback',
        scope: ["bot","identify"]
    },
    async (accessToken, refreshToken, profile, done) => {
            done(null, profile);
    })
)