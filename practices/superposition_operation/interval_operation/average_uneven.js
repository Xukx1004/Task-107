'use strict';

function average_uneven(collection) {
  let cct = collection.filter(function(value){
    return value <= 10;
  });

  let arr = cct.filter(function(value){
  return value % 2 != 0;
  });
 
  let result = arr.reduce(function(previous,current,index,array){
  return previous + current;
  });

let a = result / arr.length; 
console.log(a);
return a;
}

const collection = [1,2,3,4,5,6,7,8,9,10];
average_uneven(collection);
module.exports = average_uneven;
