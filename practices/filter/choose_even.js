'use strict';

function choose_even(collection) {
  let result = collection.filter(function(x){
    return x%2 === 0;
  })
  console.log(result);
  return result;
}
const collection = [0, 1, 2, 3, 4, 6];
choose_even(collection);
module.exports = choose_even;
