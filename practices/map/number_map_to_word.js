'use strict';
var number_map_to_word = function(collection){
  let arr = collection.map(function(x){
    return String.fromCharCode(96 + x);
})
console.log(arr);
return arr;
};
number_map_to_word ([1, 2, 3, 4, 5]);
module.exports = number_map_to_word;
