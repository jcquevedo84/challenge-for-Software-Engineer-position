const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const userRouter = require('./routes/user.routes');
const tripRouter = require('./routes/trip.routes')

const apiDb = require('./repositories/api.repository');
apiDb.connect(); 

const app = express();

app.apiDb = apiDb;

// Enable cors for public access
app.use(cors());

// Healthcheck
app.get('/health', (req, res) => {
    res.status(200).end();
});

// JSON parsing
app.use(bodyParser.json());

// Other request types parsing
app.use(bodyParser.urlencoded({
    extended: true
}));

// Remove express header
app.use((req, res, next) => {
    res.removeHeader('X-Powered-By');
    next();
});

// API requests routing
app.use('/', userRouter);
app.use('/',tripRouter)

// Catches unexpected errors
app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.url} not found`);
    next();
  });
  
module.exports = app;