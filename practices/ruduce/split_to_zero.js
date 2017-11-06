'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  for(let num = number;parseFloat((num+interval).toFixed(1))>0;num-=interval ){
      result.push(parseFloat(num.toFixed(1)));
  }
  console.log(result);
  return result;
  }
    
spilt_to_zero(0.8,0.2);
spilt_to_zero(0.7,0.3);
module.exports = spilt_to_zero;
