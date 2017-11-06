'use strict';

function median_to_letter(collection) {
  let i = collection.length;
  let num  = null;
  let a = null;
  if(i % 2 != 0 ){
    a = collection[parseInt(collection.length / 2)];
    num = Math.ceil(a);
  }
  if(i % 2 ===0){
     a = (collection[ collection.length / 2] + collection[collection.length / 2 - 1]) / 2;
    num = Math.ceil(a);
  } 
 let cct = numToChar(num)
  console.log(cct);
  return cct;

function numToChar(num) {
   let remainder = num%26;
   let quotient = parseInt(num/26);
  
   if(quotient === 0){
     return String.fromCharCode(remainder+96)
   }else if(quotient ===1&&remainder===0){
     return 'z';
   }else if(quotient > 1&&remainder===0){
     return numToChar(quotient-1) + 'z';
   }else {
     return numToChar(quotient) + String.fromCharCode(remainder+96);
   }
  }
}
const collection = [20,21,22,23,24,25,26,27,28,29,
    30,31,32,33,34,35,36,37,38,39,
    40,41,42,43,44,45,46,47,48,49,
    50,51,52,53];
  
median_to_letter(collection);
module.exports = median_to_letter;
