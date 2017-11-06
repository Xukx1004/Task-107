'use strict';

function hybrid_operation_to_uneven(collection) {
  let arr = collection.filter(function(value){
    return value % 2 != 0;
  })
  
  let result = arr.map(function(x){
    return x * 3 + 2;
  })
  console.log(result);
  return result;
  }
  
  const collection = [1,5,7,12,11,35,54,67,70];
  hybrid_operation_to_uneven(collection)
  module.exports = hybrid_operation_to_uneven;
