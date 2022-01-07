const mongoose= require('mongoose');
const { devNull } = require('os');

mongoose.connect('mongodb://localhost/csv_uploader');

const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error in connection of database "))

db.once("open",()=>{

    console.log('Successfully connected to database');
});

module.exports=db;