const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki'
} 

router.get('/', (req, res)=>{
    let connection = mysql.createConnection(mysql_setting);
    connection.connect();

    connection.query('SELECT * from standByRoom', (error, results, fields)=>{
        if(error == null){
            res.send(results);
            console.log('a');
        }
    })
    connection.end();
});

module.exports = router;