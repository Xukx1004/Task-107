'use strict';

function calculate_elements_sum(collection, element) {
  let a = collection.lastIndexOf(element);
  console.log(a);
  return a;
}
calculate_elements_sum([1,11,27,20,4,9,15,4,1,11],  4);
module.exports = calculate_elements_sum;
