const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const gameController = require('./gameController');
const shuffle = require('./shuffle');
const yamahuda = require('./yamahuda');
const distribute = require('./distribute');
var player_Number = 3;

var mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki'
}

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/home.html');
});

const createRoom = require('./createRoom');
app.use('/createRoom', createRoom);

const standByRoom = require('./standByRoom');
app.use('/standByRoom', standByRoom);

const start = require('./start');
app.use('/start', start);


app.use('/game', gameController);


var shuffle_yamahuda = shuffle(yamahuda());
console.log(shuffle_yamahuda);

var distributed = distribute(shuffle_yamahuda);
console.log(distributed);


var server = app.listen(3000, ()=>{
    console.log('Server is running!');
})