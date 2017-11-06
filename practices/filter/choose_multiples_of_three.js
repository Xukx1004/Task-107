'use strict';

function choose_multiples_of_three(collection) {
let result = collection.filter(function(x){
  return x%3 === 0;
})
console.log(result);
return result;
}
const collection = [0, 1, 2, 3, 4, 5, 6, 9, 11];
choose_multiples_of_three(collection);
module.exports = choose_multiples_of_three;
