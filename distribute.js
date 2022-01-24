const mysql = require('mysql');
const allRoom = require('./infrastructure/repositories/room');

const knex = require('knex')({
    dialect: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'babanuki'
    }
});

// const Bookshelf = require('bookshelf')(knex);
// var Player = Bookshelf.Model.extend({
//     tableName: 'players'
// });

const player_Number = 3;
// var player_Name = 'たろう';
var player_Name2 = [];
const kari = {};
// kari[player_Name] = [];

var mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki'
};

// async function mitio(){
//     const result = await allRoom();
//     console.log(result);
// }
// mitio();

var connection = mysql.createConnection((mysql_setting));
connection.connect();
connection.query('SELECT * from room', (error, results, fields)=>{
    // player_Name2.push(results[0].player);
    // console.log(player_Name2[0]);
    // kari[player_Name2[0]] = [];
    // console.log(kari);
    //ここのスコープ内でプレイヤー名をplayer_Name2にプッシュしてる。
});

// console.log(player_Name2[0]);
// kari[player_Name2[0]] = [];
// console.log(kari);
//ここでplayer_Name2にプッシュできなくて絶望。スコープ外問題と思われる。

function distribut(y){
    var count = Math.floor(y.length / player_Number);
    for(var i = 0; i < count; i++){
        // kari[player_Name2[0]].push(y[i]);//ここでプレイヤーに手札を配る
        y.splice(i, 1);
    }
    return kari;
}

module.exports = distribut;