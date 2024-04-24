const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

mongoose.connect('URL').then(() => console.log('connected mongod db')).catch((e) => console.log(e));//hide
