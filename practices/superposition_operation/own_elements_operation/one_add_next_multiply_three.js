'use strict';
function one_add_next_multiply_three(collection){
  let result = [];
  for(let m = 0;m<collection.length-1;m++){
    let n = (collection[m]+collection[m+1])*3;
    result.push(n);
  }
  // result = collection.map(function(x){
  //   return (x + collection[collection.indexOf(x)+1])*3;
  // })
  console.log(result);
  return result;
}
const collection = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
one_add_next_multiply_three(collection);
module.exports = one_add_next_multiply_three;