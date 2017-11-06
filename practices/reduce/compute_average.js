'use strict';

function compute_average(collection) {
 let result = collection.reduce(function(a,b){
   return a+b;
 })
 let a = result / collection.length;
 console.log(a);
 return a;
}
compute_average([1, 3, 5, 98, 67, 453]);
module.exports = compute_average;

