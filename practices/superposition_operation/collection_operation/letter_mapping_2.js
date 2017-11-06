'use strict';

function average_to_letter(collection) {
  let a = collection.reduce(function(previous,current,index,array){
    return previous + current;
  })

  let b =Math.ceil(a / collection.length);
  let c = String.fromCharCode(96 + b);
  console.log(c);
  return c;
}

const collection = [1,2,3,4,5,6,7,8,9,10];
average_to_letter(collection);
module.exports = average_to_letter;

