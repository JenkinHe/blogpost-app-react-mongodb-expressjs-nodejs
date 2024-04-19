const mongoose = require('mongoose')

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://jenkinwork123:aiRHJUkBPQ62ltN5@cluster0.vlr4vam.mongodb.net/').then(() => console.log('connected mongod db')).catch((e) => console.log(e));