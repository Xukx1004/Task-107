'use strict';

function amount_even(collection) {
  let cct = collection.filter(function(value){
    return value <= 10;
  })

  let arr = cct.filter(function(value){
  return value % 2 === 0;
});
 
let result = arr.reduce(function(previous,current,index,array){
  return previous + current;
});
console.log(result);
return result;
}

const collection = [1,2,3,4,5,6,7,8,9,10];
amount_even(collection);
module.exports = amount_even;
