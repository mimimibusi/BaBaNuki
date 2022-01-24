const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const knex = require("knex")({
  dialect: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki',
    charset: 'utf-8'
  }
});

const Bookshelf = require('bookshelf')(knex);

const MyData = Bookshelf.Model.extend({
  tableName: 'room'
});

// function allRooms(a){
//   console.log(a);
//   // for(i in room){
//   //   var obj = room[i].attributes;
//   //   console.log(obj.id);
//   //   console.log(obj.room_name);
//   // }
// };

router.get('/', (res,req,next)=>{
  new MyData().fetchAll().then((collection)=>{
    var content = collection.toArray();
    var obj = content[0].attributes;
    console.log(obj.room_name);
  }).catch((err)=>{
    res.status(500).json({error: true, data: {message: err.message}});
  });
});


// let connection = mysql.createConnection(mysql_setting);
// connection.connect();
// const getAllRooms = async () => {
//   const results = await connection.query(
//     "SELECT * from room"
//   );
//   console.log(results);
// };

module.exports = router;