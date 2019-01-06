'use strict';
module.exports = function() {

var obj = {};

function setValue(key, value){
    obj[key] = value;
}

function getValue(key){
    if(obj[key] === undefined){
        return null;
    }else{
        return obj[key];
    }
}
    
return{
    setValue,
    getValue
}

  
};



// 'use strict';
// module.exports = function() {

//     return{
//         setValue: (key, value) => (obj[key] = value),
//         getValue: (key, value) => {
//                 if(obj[key] === undefined){
//                     return null;
//                 }else{
//                     return obj[key];
//             }
//         }
//     }
// };