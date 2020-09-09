const mongoose = require('mongoose')
const config = require('../config/dev')
const fakeDB = require('./FakeDB')
    mongoose.connect(config.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, async()=> {
        console.log('START POP DB');
        await fakeDB.populate()
        await mongoose.connection.close()
        console.log('DB has been POP');
    })
