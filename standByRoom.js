const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const mysql_setting = {
  host: "localhost",
  user: "root",
  password: "",
  database: "babanuki",
};

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
    tableName: 'rooms'
});

router.get('/', (req, res)=>{
  new Room().fetchAll().then((model)=>{
    console.log(model.toArray());
    res.send(model.toArray());
  });
});

module.exports = router;
