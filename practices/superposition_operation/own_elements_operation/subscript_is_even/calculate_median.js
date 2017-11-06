'use strict';
var calculate_median = function(collection){
    let arr1 = [];
    
    let a = null;
    for(let i = 0;i<collection.length;i++){
        if(i%2 != 0){
            arr1.push(collection[i]);
        }
        if(arr1.length %2 != 0){
            a = arr1[collection[parseInt(arr1.length/2 -1)]];
        }
        
        if(arr1.length %2 === 0){ 
            a = (collection[arr1.length/2 -1] +collection[arr1.length/2]);
        }
    }
    console.log(a);
   return a;
};
calculate_median ([1, 2, 3, 4, 5, 6]) ;
calculate_median ([1, 2, 3, 4, 5, 6, 7, 8, 9]) ;
module.exports = calculate_median;
