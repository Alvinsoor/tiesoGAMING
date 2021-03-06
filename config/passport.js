const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@clusterequisde.kvtgn.mongodb.net/test?retryWrites=true&w=majority`;
const clientConnect = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(
    new GoogleStrategy({
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/auth/google/redirect',
        },
        function (accessToken, refreshToken, profile, done) {
            clientConnect.connect((err, client) => {
                if (err) return console.error(err)
                const db = client.db('test')
                const usersCollection = db.collection('users')
                const filter = {id: profile.id}
                const options = {upsert: true}
                const update = {
                    $set: {
                        // timestamp: +new Date(),
                        // id: profile.id,
                        // photo: profile.photos[0].value,
                        // email: profile.emails[0].value,
                        // name: profile.displayName
                        nick: profile.nick,
                        nombre: profile.displayName,
                        apellidos: "",
                        email: "",
                        password: "password",
                        image: "https://icon-library.com/images/8-bit-mario-icon/8-bit-mario-icon-2.jpg",
                        uid: Math.floor(Math.random() * 10000) + 1
                    }
                }
                // console.log(profile)
                usersCollection.updateOne(filter, update, options)
                    .then(result => {
                        done(null, profile)
                    })
                    .catch(error => console.error(error))
            });
        }
    )
);
passport.serializeUser(function (user, done) {
    // console.log(user);
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    // console.log(id);
    clientConnect.connect((err, client) => {
        if (err) return console.error(err)
        const db = client.db('test')
        const usersCollection = db.collection('users')
        const get = {
            id: id
        }
        usersCollection.findOne(get)
            .then(result => {
                done(null, result)
            })
            .catch(error => console.error(error))
    });
});

module.exports = passport;

