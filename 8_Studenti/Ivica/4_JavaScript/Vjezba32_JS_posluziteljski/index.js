
const _ =require('lodash');

function getType(a){
    if(_.isNumber(a)){
        console.log(`${a} is number`);
    }
}

getType(5); 
