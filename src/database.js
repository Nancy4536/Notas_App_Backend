const mongoose = require('mongoose');


const URI = 'mongodb+srv://pruebamernis:pruebamerniss@cluster0.mgone.mongodb.net/InventServ?retryWrites=true&w=majority';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected...');
    
});