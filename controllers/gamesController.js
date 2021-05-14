const fs = require('fs');
const PATH = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@clusterequisde.kvtgn.mongodb.net/test?retryWrites=true&w=majority`;
const clientConnect = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

// console.table(GAMES_DB);

class GamesController {
    // generateId() {
    //     let id = CURRENT_ID;
    //     CURRENT_ID++;
    //     return id;
    // }
    //
    // /*updateUser(game){
    //     let index = GAMES_DB.findIndex(element => element.uid === game.uid);
    //     if(index>-1){
    //         GAMES_DB[index] = Object.assign(GAMES_DB[index],game);
    //         return game;
    //     }else{
    //         return undefined;
    //     }
    // }*/
    //
    // getList() {
    //     return GAMES_DB;
    // }
    //
    // getGame(id) {
    //     let game = GAMES_DB.find(ele => ele.gid === id);
    //     return game;
    // }
    //
    // getGameByName(name) {
    //     let game = GAMES_DB.find(ele => ele.name === name);
    //     return game;
    // }

    async getList(){
        try {
            const client = await clientConnect.connect();
            const gameCollection = client.db('torneosIteso').collection('itesoGames');

            return await gameCollection.find().toArray();
        } catch (e) {
            console.error(e);
        }
    }

    async getGame(value){
        try {
            const client = await clientConnect.connect();
            const gameCollection = client.db('torneosIteso').collection('itesoGames');
            const filter = {value}


            return await gameCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async getGameByName(nombre){
        try {
            const client = await clientConnect.connect();
            const gameCollection = client.db('torneosIteso').collection('itesoGames');
            const filter = {nombre}


            return await gameCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = GamesController;
