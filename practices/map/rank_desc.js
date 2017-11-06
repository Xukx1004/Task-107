'use strict';
var rank_desc = function(collection){
  let result = collection.sort(function(a,b){
    return a-b;
  })
  console.log(result);
  return result;
};
const collection =  [3, 2, 4, 5, 6];
rank_desc(collection);

module.exports = rank_desc;
