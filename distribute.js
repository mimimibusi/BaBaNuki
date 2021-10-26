const player_Number = 3;
const player_Name = 'たろう';
const kari = {};
kari[player_Name] = [];

function distribut(y){
    var count = Math.floor(y.length / player_Number);
    for(var i = 0; i < count; i++){
        kari[player_Name].push(y[i]);
        y.splice(i, 1);
    }
    return kari;
}

module.exports = distribut;