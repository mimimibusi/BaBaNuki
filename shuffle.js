function shuffle(n){
    var newArray = [];
    while(n.length > 0){
        var k = Math.floor(Math.random() * n.length);
        newArray.push(n[k]);
        n.splice(k, 1);
    }
    return newArray;
}

module.exports = shuffle;