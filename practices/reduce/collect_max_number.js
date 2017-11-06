'use strict';

function collect_max_number(collection) {
  let result = collection.reduce(function(x,y){
    return x>y?x:y;
});
console.log(result);
return result;
}

const collection = [1, 2, 3, 4, 5];
collect_max_number(collection);

module.exports = collect_max_number;
