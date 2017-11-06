'use strict';
var rank_asc = function(collection){
  let result = collection.sort(function(a,b){
    return b-a;
  })
  console.log(result);
  return result;
};
const collection = [3, 2, 4, 5, 6];
rank_asc(collection);
module.exports = rank_asc;
