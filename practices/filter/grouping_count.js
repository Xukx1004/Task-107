'use strict';

function grouping_count(collection) {
  let object = {};
  let answer = [];
  for(let item of collection){
    if(!object[item]){
      object[item] = {};
      object[item].key = item;
      object[item].value = 1
    }else{
      object[item].value ++;
    }
  }
  for (let key in object){
    answer.push(object[key]);
    }
    console.log(answer);
    return answer;
}
const collection = [1,1,1,1,2,3,1,3,4,2,3,1,3,4,2];
grouping_count(collection);
module.exports = grouping_count;
