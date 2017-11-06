'use strict';

function get_intersection(collection_a, collection_b) {
  let result = []; 
  for(let j = 0;j<collection_b.length;j++){
    for(let i= 0;i<collection_a.length;i++){
      if(collection_a[i] === collection_b[j]){
        result.push(collection_b[j]);
      }
    }
  }
  console.log(result);
  return result;
}
const collection_a = [10, 27, 28, 19, 5];
const collection_b = [5, 78, 28, 19, 23];
get_intersection(collection_a, collection_b);
module.exports = get_intersection;
