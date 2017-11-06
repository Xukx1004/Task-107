'use strict';

function collect_min_number(collection) {
  let result = collection.reduce(function(x,y){
    return x<y?x:y;
  })
  console.log(result);
  return result;
}

collect_min_number([1, 8, 9, 21, 5]);
module.exports = collect_min_number;

