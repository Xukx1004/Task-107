'use strict';

function choose_no_repeat_number(collection) {
  let result =  [];
    result = collection.filter(function(item ,index,array){
      return  collection.indexOf(item) === index;
    })
    console.log(result);
    return result;
}
const collection = [1, 1, 1, 2, 2, 3, 4];
choose_no_repeat_number(collection);
module.exports = choose_no_repeat_number;
