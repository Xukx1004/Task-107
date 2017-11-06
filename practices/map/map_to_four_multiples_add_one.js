'use strict';
 function map_to_four_multiples_add_one  (collection){
  let result = collection.map(function(x){
    return x*4 +1 ;
  });
 console.log(result);
 return result;
};
const collection = [1, 2, 3, 4, 5];
map_to_four_multiples_add_one (collection);
module.exports = map_to_four_multiples_add_one;
