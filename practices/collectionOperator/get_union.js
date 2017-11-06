'use strict';

function get_union(collection_a, collection_b) {
  for(let item of collection_b){
    if(collection_a.indexOf(item) === -1){
      collection_a.push(item);
    }
  }
 
 console.log(collection_a);
 return collection_a;
}
const collection_a = [10, 27, 28, 19, 5];
const collection_b = [5, 78, 28, 19, 23];
get_union(collection_a, collection_b);
module.exports = get_union;

