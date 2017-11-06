'use strict';

function compute_median(collection) {
  let arr = collection.sort(function(a,b){
    return a - b;
  });
 
  if(collection.length % 2 != 0){
    let result = arr[parseInt(arr.length / 2)];
    console.log(result);
    return result;
  }
  if(collection.length % 2 === 0 ){
    let result =  (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2;
    console.log(result);
    return result;
  }
 }
 //const collection = [1, 1, 1, 2, 3];
 //const collection = [1, 1, 2, 3];
 const collection = [1, 4, 6, 2, 3, 10, 9, 8, 11, 20, 19, 30];
 compute_median(collection);
 module.exports = compute_median;


