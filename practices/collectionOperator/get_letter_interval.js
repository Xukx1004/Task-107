'use strict';

function get_letter_interval(number_a, number_b) {
  let result = [];
  let m = null;
  if(number_a <= number_b){
    for(let i = number_a;i <= number_b;i++){
      m = String.fromCharCode(96 + parseInt(i));
      result.push(m);
    }
  }
  else{
    for(let i = number_a;i >= number_b;i--){
      m = String.fromCharCode(96 + parseInt(i));
      result.push(m);
    }
  }
  console.log(result);
  return result;
}
get_letter_interval(1, 5);

module.exports = get_letter_interval;
