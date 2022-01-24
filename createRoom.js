const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const knex = require('knex')({
    dialect: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'babanuki'
    }
});

const Bookshelf = require('bookshelf')(knex);
var Player = Bookshelf.Model.extend({
    tableName: 'players'
});
var Room = Bookshelf.Model.extend({
    tableName: 'rooms',
    user: function(){
        return this.belongsTo(Player);
    }//よくわかってないけど多分Playerの情報も取得
});

var mysql_setting = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'babanuki'
}

router.post('/', (req, res)=>{
    var roomName = req.body.room;
    var data = {'room_name': roomName};

    new Room(data).save().then((model)=>{
        res.redirect('/standByRoom');
    });
    //roomの作成&roomの一覧ページにリダイレクト
});

module.exports = router;