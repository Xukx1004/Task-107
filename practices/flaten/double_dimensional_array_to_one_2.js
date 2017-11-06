'use strict';

function double_to_one(collection) {
  let result = [];
  for(let i = 0;i< collection.length;i++){
      if(Array.isArray(collection[i])){
          for(let j = 0;j< collection[i].length ;j++){
          result.push(collection[i][j]);
      }
  }
  else{
      result.push(collection[i]);
  }
  }
  let arr = result.filter(function(item,index,array){
    return result.indexOf(item) === index;
  })
  console.log(arr);
  return arr;
}
const collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
double_to_one(collection);
module.exports = double_to_one;
