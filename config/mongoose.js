const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/HabitWebApp");
//mongoose connected to the database

const db = mongoose.connection;
//connection made

db.on('error', console.error.bind(console, "Error while connecting to DB"));

db.once('open', function () {
    console.log("Open and running DB");
});
//Once connection is established