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
    var data = {'name': roomName};

    var connection = mysql.createConnection(mysql_setting);

    connection.connect();

    connection.query('insert into standByRoom set ?', data, (error, results, fields)=>{
        res.redirect('/standByRoom');
    });
    connection.end();
});

module.exports = router;