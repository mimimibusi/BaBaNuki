// const _ = require('lodash');

function createYamahuda(){
    let yamahuda = [];
    [...Array(13)].map((el, l)=>{
        for(i = 1; i <= 4; i++){
            yamahuda.push(l + i);
        }
    })
    yamahuda.push('Joker');
    return yamahuda;
}

module.exports = createYamahuda;