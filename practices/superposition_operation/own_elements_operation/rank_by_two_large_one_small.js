'use strict';
function rank_by_two_large_one_small(collection){
  let result = [];
  let arr = collection.sort(function(x,y){
     return x-y;
  })
  
  for(let i = 0 ;i<arr.length;i+=3){
    let a = arr.slice(i,i+3);
    if(a.length === 3){
      let t = a[2];
      a[2] = a[0];
      a[0] =a[1];
      a[1] = t;
      for(let j = 0;j<a.length;j++){
        result.push(a[j])
      }
    }
    if(a.length <3){
      for(let j = 0;j<a.length;j++){
        result.push(a[j]);
    }
    }
  }
  console.log(result);
  return result;
  } 
   
  
  const collection = [2, 8, 1, 9, 6, 4, 3, 10];
  rank_by_two_large_one_small(collection);
  module.exports = rank_by_two_large_one_small;
  