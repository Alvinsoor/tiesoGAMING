'use strict';
const express = require('express');
const UsersController = require('../controllers/usersController');
const usersCtrl = new UsersController();
const router = express();

router.post('/', async (req, res) => {
    let b = req.body;
    if (b.nombre && b.apellidos && b.email && b.nick && b.fecha) {
        let u = await usersCtrl.getUniqueUser(b.nick, b.email);
        if (u) {
            res.status(400).send('user already exists');
        } else {
            res.status(201).send(await usersCtrl.insertUser(b));
        }
    } else {
        res.status(400).send('missing arguments');
    }
});

router.get('/:_id', async (req, res) => {
    let user
    if (req.params._id) {
        user = await usersCtrl.getUser(req.params._id);
        if (user) {
            res.send(user);
        } else {
            res.set('Content-Type', 'application/json');
            res.status(204).send({});
        }
    } else {
        res.status(400).send('missing params');
    }
});

router.put('/:_id', async (req, res) => {
    let b = req.body;
    if (req.params._id && (b.nombre || b.apellidos || b.password || b.image)) {
        let u = await usersCtrl.getUser(req.params._id);
        if (u) {
            u = {
                ...u,
                ...b
            }
            res.status(200).send(await usersCtrl.updateUser(u));
        } else {
            res.status(404).send('user does not exist');
        }
    } else {
        res.status(400).send('missing arguments');
    }
});

router.delete('/:email', async (req, res) => {
    if (req.params.email) {
        let u = await usersCtrl.getUser(req.params.email);
        if (u) {
            res.status(200).send({"deleted": await usersCtrl.deleteUser(u)});
        } else {
            res.status(404).send('user does not exist');
        }
    } else {
        res.status(400).send('missing arguments');
    }
});
module.exports = router;

/*router.get('/:email',(req,res)=>{
    let userCtrl = new UsersController();
    let users = userCtrl.getList();
    if(req.params.email){
        users = users.find(ele=> ele.email === req.params.email);
        if(users){
            res.send(users);
        }else{
            res.set('Content-Type','application/json');
            res.status(204).send({});
        }
    }else{
        res.status(400).send('missing params');
    }
});*/
