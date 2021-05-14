'use strict';
const path = require('path');
require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const randomize = require('randomatic');
const cors = require('cors');
const {
    OAuth2Client
} = require('google-auth-library');

//load middleware
// app.use(express.static(__dirname + '/public'));
app.use(express.static('public/frontendangular'))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());

const usersRouter = require('./routes/usersRoutes');
const gamesRouter = require('./routes/gamesRoutes');
const tourneysRouter = require('./routes/tourneysRoutes');

const UsersController = require('./controllers/usersController');

const PORT = process.env.PORT || 3000;

const googleClient = new OAuth2Client(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

async function authentication(req, res, next) {
    let xauth = req.headers.authorization;
    console.log(req.headers)
    if (xauth) {
        let id = xauth.split("-").pop();
        let userctrl = new UsersController();
        let user = await userctrl.getUser(id);
        console.log("comparar user.token con xauth")
        if (user && user.token === xauth) {
            req._id = `${user._id}`;
            console.log("termino middleware")
            next();
        } else {
            res.status(401).send('Not authorized 2');
        }
    } else {
        res.status(401).send('Not authorized 1');
    }

}

app.use('/api/users', authentication, usersRouter);
app.use('/api/games', gamesRouter);
app.use('/api/tourneys', tourneysRouter);

app.post('/api/login', async (req, res) => {
    if (req.body.email && req.body.password) {
        console.log(req.body);
        let uctrl = new UsersController();
        let user = await uctrl.getUserByCredentials(req.body.email, req.body.password);
        console.log(user)
        if (user) {
            let token = randomize('Aa0', '10') + "-" + user._id;
            user.token = token;
            await uctrl.updateUser(user);
            res.status(200).send({
                "token": token
            });
        } else {
            res.status(401).send('Wrong credentials');
        }
    } else {
        res.status(400).send('Missing user/pass');
    }
});

app.post('/api/google_login', async (req, res) => {
    console.log('Datos de google ID TOKEN recibidos', req.body.idToken);

    const ticket = googleClient.verifyIdToken({
        idToken: req.body.idToken,
    }).then(async re => {
        let usersCtrl = new UsersController();
        const data = re.getPayload();
        console.log('Google response: ', re);
        console.log(data.email);
        let user = await usersCtrl.getUniqueUserEmail(data.email);
        if (user.googleId == data.sub) {
            let token = randomize('Aa0', '10') + "-" + user._id;
            user.token = token;
            await usersCtrl.updateUser(user);
            res.status(200).send({
                "token": user.token
            })
        } {
            res.status(402).send({
                "err": 402
            })
        }
    }).catch(e => {
        res.status(401).send('error en credenciales desde google');
    });
})


app.post('/api/register', async (req, res) => {
    let b = req.body;
    if (b.email && b.nick) {
        b.image = "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";
        let usersCtrl = new UsersController();
        let u = await usersCtrl.getUniqueUser(b.nick, b.email);
        if (u) {
            res.status(400).send('user already exists');
        } else {
            let us = await usersCtrl.insertUser(b);
            console.log(us);
            let token = randomize('Aa0', '10') + "-" + us._id;
            us.token = token;
            await usersCtrl.updateUser(us);
            res.status(201).send({
                "token": token
            });
        }
    } else {
        res.status(400).send('missing arguments');
    }
});


app.post('/api/google_register', async (req, res) => {
    console.log('Datos de google ID TOKEN recibidos', req.body.idToken);

    const ticket = googleClient.verifyIdToken({
        idToken: req.body.idToken,
    }).then(async re => {
        let usersCtrl = new UsersController();
        const data = re.getPayload();
        console.log('Google response: ', re);
        let userdb = {
            nick: data.email.split('@')[0],
            nombre: data.given_name,
            apellidos: data.family_name,
            email: data.email,
            googleId: data.sub,
            image: data.picture
        }
        console.log(userdb)
        let u = await usersCtrl.getUniqueUserEmail(userdb.email);
        if (u) {
            res.status(400).send('user already exists');
        } else {
            let us = await usersCtrl.insertUser(userdb);
            let us2 = await usersCtrl.getUniqueUserEmail(userdb.email);
            if (us2) {
                let token = randomize('Aa0', '10') + "-" + us2._id;
                us2.token = token;
                await usersCtrl.updateUser(us2); 
                res.status(201).send({
                    "token": token
                });
            }else{
                res.status(402).send("error al insetar user");
            }
        }
    }).catch(e => {
        res.status(401).send('error en credenciales desde google');
    });
})

app.get('/', (req, res) => {
    res.redirect("/html/index.html");
});

app.use(function(req, res, next){
    res.sendFile(path.join(__dirname, '/public/frontendangular/index.html'));
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
})



let token = "Nmt3yIyNeV-10001"
let tokSep = token.split("-");
let uid = tokSep[tokSep.length - 1];
