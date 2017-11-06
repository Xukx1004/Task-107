'use strict';

function get_integer_interval_2(number_a, number_b) {
  let result = [];
  if(number_a <= number_b){
    for(let i = number_a;i<=number_b;i++){
      if(i % 2 === 0){
        result.push(i);
      }
    }
  }
  else{
    for(let i = number_a;i>=number_b;i--){
      if(i % 2 === 0){
        result.push(i);
      }
    }
  }
  
  console.log(result);
  return result;
}
get_integer_interval_2(10, 10);
module.exports = get_integer_interval_2;
