var _ = require('lodash');
var yamahuda = [];

/*for(n = 0; n <=3; n++){
    for(i = 1; i <= 13; i++){
        yamahuda.push(i);
    };
} */
console.log(yamahuda);
console.log([...Array(13)]);
[...Array(13)].map((el,i)=>{
    //console.log(el);
    _.times(4,()=>{yamahuda.push(i+1)})
});
//console.log(yamahuda);


