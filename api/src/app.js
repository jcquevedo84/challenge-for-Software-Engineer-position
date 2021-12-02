const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongo = require("mongoose");
//mongo.Promise = global.Promise;
const config = require('./config');

const userRouter = require('./routes/user.routes');
const tripRouter = require('./routes/trip.routes');
const authRouter = require('./routes/auth.routes');

const apiDb = require('./repositories/api.repository');
apiDb.connect(); 

const app = express();

//app.apiDb = apiDb;
//const { host, username, password, name, port} = config.database;
//  url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
//mongoose.connect('mongodb+srv://admin:admin@cluster0.m4rkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true, useFindAndModify: false })

//let url =`mongodb://${username}:${password}@${host}:${port}/${name}?authSource=admin`;
//const url = "mongodb://root:123456@challengedb:27017/challenge?authSource=admin"
//const url = "mongodb://challengedb:27017/challenge"
/*console.log("new url: "+url);
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
*/

  var corsOptions = {
    origin: "http://localhost:8081"
  };

// Enable cors for public access
app.use(cors(corsOptions));

// Healthcheck
app.get('/health', (req, res) => {
    res.status(200).end();
});

// JSON parsing
//app.use(bodyParser.json());

// Other request types parsing
/*app.use(bodyParser.urlencoded({
    extended: true
}));*/

// Remove express header
/*app.use((req, res, next) => {
    res.removeHeader('X-Powered-By');
    next();
});*/

// API requests routing
//app.use('/', userRouter);
//app.use('/', tripRouter);
//app.use('/', authRouter);

// Catches unexpected errors
app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.url} not found`);
    next();
  });
  
module.exports = app;