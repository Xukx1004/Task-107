'use strict';

function compare_collections(collection_a, collection_b) {
  let obj = {
    '1' : "ture", '0':"false"
  }
    let a = collection_a.toString();
    let b = collection_b.toString();
    if(a  === b){
     console.log(obj[1]);
     return (obj[1]);
    }
    else{
      console.log(obj[0]);
      return obj[0];
    }
  }
  
  const collection_a = [1,11,27,20,4,9,15];
  const collection_b = [1,11,27,20,4,9,15];
  compare_collections(collection_a, collection_b);
  module.exports = compare_collections;
  

