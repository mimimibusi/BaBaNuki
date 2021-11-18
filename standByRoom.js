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

    connection.query('SELECT * from room', (error, results, fields)=>{
        if(error == null){
            // for(let i = 0; i <= Object.keys(results).length; i++){
                res.send(results[0].room_name);
                // console.log(Object.keys(results).length)
            // }
        }
    })
    connection.end();
});

module.exports = router;