const fs = require('fs');
const PATH = require('path');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@clusterequisde.kvtgn.mongodb.net/test?retryWrites=true&w=majority`;
const clientConnect = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true});

class TourneysController {

    async insertTourney(tourney) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filter = {nombre: tourney.nombre}
            const options = {upsert: true}
            const update = {
                $set: {
                    ...tourney
                }
            }

            return await tourneyCollection.updateOne(filter, update, options);
        } catch (e) {
            console.error(e);
        }
    }

    async updateTourney(tourney) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filter = {_id: new ObjectID(tourney._id)}
            const options = {upsert: false}
            const {_id, ...rest}= tourney;
            const update = {
                $set: {
                    ...rest
                }
            }
            console.log(filter,update)
            return await tourneyCollection.updateOne(filter, update, options);
        } catch (e) {
            console.error(e);
        }
    }

    async deleteTourney(tourney) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filter = {_id: new ObjectID(tourney._id)}


            return await tourneyCollection.deleteOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async getList() {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');


            return await tourneyCollection.find().toArray();
        } catch (e) {
            console.error(e);
        }

    }

    async getTourney(_id) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filter = {_id: new ObjectID(_id)}
            console.log(filter)

            return await tourneyCollection.findOne(filter);
        } catch (e) {
            console.error(e);
        }
    }

    async insertParticipant(user, tourney) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filterTourney = {_id: new ObjectID(tourney._id)}
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filterUser = {_id: new ObjectID(user._id)};
            const userFound = await usersCollection.findOne(filterUser);
            const tourneyFound = await tourneyCollection.findOne(filterTourney);
            if (userFound !== undefined && tourneyFound !== undefined) {
                tourneyFound.gamelist.push({jugador: userFound._id})
                tourneyFound.cantjug = tourney.gamelist.length;
                const options = {upsert: false}
                const update = {
                    $set: {
                        ...tourneyFound
                    }
                }
                return await tourneyCollection.updateOne(filterTourney, update, options);
            } else return undefined;

        } catch (e) {
            console.error(e);
        }
    }

    async deleteParticipant(user, tourney) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filterTourney = {_id: new ObjectID(tourney._id)}
            const usersCollection = client.db('torneosIteso').collection('itesousers');
            const filterUser = {_id: new ObjectID(user._id)};
            const userFound = await usersCollection.findOne(filterUser);
            const tourneyFound = await tourneyCollection.findOne(filterTourney);
            if (userFound !== undefined && tourneyFound !== undefined) {
                tourneyFound.gamelist.filter(element => element.jugador !== user._id)
                tourneyFound.cantjug = tourney.gamelist.length;
                const options = {upsert: false}
                const update = {
                    $set: {
                        ...tourneyFound
                    }
                }
                return await tourneyCollection.updateOne(filterTourney, update, options);
            } else return undefined;

        } catch (e) {
            console.error(e);
        }
    }

    async startState(tourney) {
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filter = {_id: new ObjectID(tourney._id)}

            const tournament = await tourneyCollection.findOne(filter);
            if (tournament !== undefined) {
                const options = {upsert: false}
                const update = {
                    $set: {
                        ...tournament,
                        curso: true
                    }
                }
                return await tourneyCollection.updateOne(filter, update, options);
            } else return undefined

        } catch (e) {
            console.error(e);
        }
    }


    async getTourneysOfUser(admin){
        try {
            const client = await clientConnect.connect();
            const tourneyCollection = client.db('torneosIteso').collection('itesoTourney');
            const filter = {admin}

            return await tourneyCollection.find(filter);
        } catch (e) {
            console.error(e);
        }
    }


}

module.exports = TourneysController;
