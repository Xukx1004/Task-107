'use strict';

function collect_all_even(collection) {
  let result = [];
  result = collection.filter(function(x){
    return x % 2 === 0;
  });
  console.log(result);
  return result;
}
const collection = [1, 2, 3, 4, 5];
collect_all_even(collection);
module.exports = collect_all_even;
