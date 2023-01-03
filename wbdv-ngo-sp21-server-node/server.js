const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/db_whiteboard',
                 {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
});

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
               "*");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)


app.get('/hello', (req, res) => res.send('hello world!'))

app.listen(2000)