'use strict';
 function map_to_three_multiples (collections){
  let result = collections.map(function(x){
    return x*3 ;
  });
 console.log(result);
 return result;
};
var collections = [1, 3, 5, 4, 9];
map_to_three_multiples (collections);
module.exports = map_to_three_multiples;
