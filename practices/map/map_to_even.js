'use strict';
function map_to_even(collection){
  let result = collection.map(function(x){
    return x*2;
  });
 console.log(result);
 return result;
}

const collection = [1, 2, 3, 4, 5];
map_to_even(collection)
module.exports = map_to_even;
