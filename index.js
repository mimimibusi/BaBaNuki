import { createGame } from "./gameController";
var _ = require("lodash");
var express = require("express");
var app = express();
var yamahuda = [];
var player_Number = 3;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

//gameを作成する時のcontroller
app.post("/game/", createGame);

[...Array(13)].map((el, i) => {
  _.times(4, () => {
    yamahuda.push(i + 1);
  });
});
//1~54の数字を作っている
yamahuda.push("Joker");

function shuffle(n) {
  var newArray = [];
  while (n.length > 0) {
    var k = Math.floor(Math.random() * n.length);
    newArray.push(n[k]);
    n.splice(k, 1);
  }
  return newArray;
}

var shuffle_yamahuda = shuffle(yamahuda);
var tehuda = {};
var player_Name = "たろう";
tehuda[player_Name] = [];

var maisuu = Math.floor(shuffle_yamahuda.length / player_Number);
for (var i = 0; i < maisuu; i++) {
  tehuda[player_Name].push(shuffle_yamahuda[i]);
  shuffle_yamahuda.splice(i, 1);
}
console.log(tehuda[player_Name].length);
console.log(maisuu);

var server = app.listen(3000, () => {
  console.log("Server is running!");
});
