const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki'
}

router.post('/', (req, res)=>{
    var roomName = req.body.room;
    var host = req.body.player;
    var data = {'room_name': roomName, 'player': host};

    var connection = mysql.createConnection(mysql_setting);

    connection.connect();

    connection.query('insert into room set ?', data, (error, results, fields)=>{
        res.redirect('/standByRoom');
    });
    connection.end();
});

module.exports = router;