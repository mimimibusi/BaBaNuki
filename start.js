const express = require('express');
const mysql = require('mysql');
const router = express.Router();

var mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki'
};

router.get('/', (req, res)=>{
    var connection = mysql.createConnection(mysql_setting);

    connection.connect();

    connection.query('SELECT * from room', (error, results, fields)=>{
        if(error == null){
            // var data = {title:'mysql', content: results};
            res.send(results.name);
            console.log('a');
        }
    });
    connection.end();
});

module.exports = router;