'use strict';
var single_element = function(collection){
    let arr = [];
    let arr1 = [];
    for(let i = 0;i< collection.length;i++){
       if(i%2 != 0){
           arr.push(collection[i]);
       }
    }
    for(let item of arr){
        if(arr.indexOf(item) === arr.lastIndexOf(item)){
            arr1.push(item);
        }
    }
    console.log(arr1);
    return arr1;
    };
    
    const collection = [1, 2, 3, 2, 5, 6, 21, 43, 12, 5];
    single_element(collection);
    module.exports = single_element;
    