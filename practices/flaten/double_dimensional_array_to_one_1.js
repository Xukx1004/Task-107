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
console.log(result);
return result;
}
const collection = [1, [2], [3, 4]];
double_to_one(collection);
module.exports = double_to_one;
