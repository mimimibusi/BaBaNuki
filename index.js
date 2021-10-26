const express = require('express');
const app = express();
const gameController = require('./gameController');
const shuffle = require('./shuffle');
const yamahuda = require('./yamahuda');
const distribute = require('./distribute');
var player_Number = 3;

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/home.html');
});


app.use('/game', gameController);


// [...Array(13)].map((el,i)=>{
//     _.times(4,()=>{yamahuda.push(i+1)})
// });
// //1~54の数字を作っている
// yamahuda.push('Joker');
var shuffle_yamahuda = shuffle(yamahuda());
console.log(shuffle_yamahuda);
// var tehuda = {};
// var player_Name = 'たろう';
// tehuda[player_Name] = [];

var distributed = distribute(shuffle_yamahuda);
console.log(distributed);
// var　maisuu = Math.floor(shuffle_yamahuda.length / player_Number);
// for(var i = 0;i < maisuu; i++){
//     tehuda[player_Name].push(shuffle_yamahuda[i]);
//     shuffle_yamahuda.splice(i, 1);
// }
// console.log(tehuda);
// console.log(maisuu);



var server = app.listen(3000, ()=>{
    console.log('Server is running!');
})