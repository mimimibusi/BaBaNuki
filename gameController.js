// export const CreateGame = (req, res){
//     const players = req.body.players;
//         player_Name = 'おれ';
//         console.log(player_Name)
//     return player_Name;
// }

var express = require("express");
var router = express.Router();

router.post("/", (req, res) => {
  let tehuda = {};
  let player_Name = req.body.name;
  tehuda[player_Name] = [];
  res.send(tehuda);
  console.log(tehuda);
  return tehuda;
});

module.exports = router;
