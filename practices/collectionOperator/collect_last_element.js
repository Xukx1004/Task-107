'use strict';

function collect_last_element(collection) {
  let a = collection[collection.length - 1];
  console.log(a);
  return a;
}
const collection = [1, 2, 3, 4, 5];
collect_last_element(collection);
module.exports = collect_last_element;
