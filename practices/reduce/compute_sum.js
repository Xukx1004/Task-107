'use strict';

function calculate_elements_sum(collection) {
  let result = collection.reduce(function(x,y){
    return x + y;
  })
  console.log(result);
  return result;
}

const collection = [1, 2, 3, 4, 5];
calculate_elements_sum(collection);
module.exports = calculate_elements_sum;

