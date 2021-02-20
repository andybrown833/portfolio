//---------------------- CONSTS / GLOBAL VARS ----------------------
const express = require('express');
const socket = require('socket.io');
const sha3_512 = require('js-sha3').sha3_512;
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const cwd = __dirname;
const date = require('date-and-time');
var cors = require('cors');

//---------------------- EXPRESS SETUP ----------------------
var app = express();
var server = app.listen(80, function(){
    console.log('=====================================')
    console.log(`Online - http://localhost:80`)
    console.log('=====================================')
});

//---------------------- ROUTES ----------------------
app.use(express.static('public'));
app.route('/').get(function(req, res) { res.sendFile(cwd+"/public/index.html"); });
app.route('/app').get(function(req, res) { res.sendFile(cwd+"/public/app.html"); });
app.route('/hype').get(function(req, res) { res.statusCode = 302; res.setHeader("Location", "https://discord.gg/ZzaTrwfVXt"); res.end(); });

app.route('/*/').get(function(req, res) { res.sendFile(cwd+"/public/index.html"); });


//---------------------- SOCKETS ----------------------
var io = socket(server);
io.on('connection', (socket) => {
    setInterval(() => {
        socket.emit('testing', { status: true});
    }, 10000);
});

