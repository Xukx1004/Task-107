'use strict';

function find_first_even(collection) {
 let result = collection.filter(function(x){
   return x%2 === 0;
 })
 console.log(result[0])
 return result[0];
}
find_first_even( [1,11,27,20,4,9,15]);
module.exports = find_first_even;

