require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

// express app
const app = express();
const server = require('http').createServer(app);

// middleware
app.use(express.json());

app.use((req, res, next) => {
    // console.log(req.path, req.method);
    next();
})

// routes

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database');
        // listen to port
        server.listen(process.env.PORT, () => {
            console.log('listening for requests on port', process.env.PORT)
        });
    })    
    .catch((err) => {
        console.log(err);
    });

