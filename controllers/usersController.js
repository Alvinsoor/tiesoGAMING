const fs = require('fs');
const PATH = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@clusterequisde.kvtgn.mongodb.net/test?retryWrites=true&w=majority`;
const clientConnect = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

class UsersController {

    async insertUser(user) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {email: user.email}
            const options = {upsert: true}
            const update = {
                $set: {
                    ...user
                }
            }

            return await usersCollection.updateOne(filter, update, options);
        } catch (e) {
            console.error(e);
        }
    }

    async updateUser(user) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {email: user.email}
            const options = {upsert: false}
            const update = {
                $set: {
                    ...user
                }
            }

            return await usersCollection.updateOne(filter, update, options);
        } catch (e) {
            console.error(e);
        }
    }

    async deleteUser(user) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {email: user.email};

            return await usersCollection.deleteOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async getUserByCredentials(email, password) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {email, password};

            return await usersCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async getUniqueUser(nick, email) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {nick, email};

            return await usersCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async getUser(_id) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {_id: new ObjectID(_id)};

            return await usersCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async getUserByNickname(nick) {
        try {
            const client = await clientConnect.connect();
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filter = {nick};

            return await usersCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = UsersController;
