'use strict';

function find_last_even(collection) {
  let result = collection.filter(function(x){
    return x%2 === 0;
  })
  let a = result[result.length - 1];
  console.log(a);
  return a;
 }

find_last_even( [1,11,27,20,4,9,15]);
module.exports = find_last_even;
