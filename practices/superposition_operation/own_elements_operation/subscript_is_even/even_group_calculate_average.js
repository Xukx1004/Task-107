// 'use strict';
// var even_group_calculate_average = function(collection){
//     let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
//     let arr4 = [];
//     let arr5 = [];
//     let result = [];
//     for(let i = 0;i<collection.length;i++){
//     if(i % 2 !== 0){
//         arr1.push(collection[i]);
//     }
//     }
//     let cct = arr1.filter(function(x){
//         return x%2 === 0;
//     });
    
//     if(cct.length === 0){
//         console.log([0]);
//     }

//     else{
//         for(let item of cct){
//         let a = item.toString().length;
//         if(a === 1){
//             arr2.push(item);
//         }
//         if(a ===2){
//             arr3.push(item);
//         }
//         if(a ===3){
//             arr4.push(item);
//         }
//     }
//         let r = arr2.reduce(function(a,b){
//             return (a+b);
//         }) 
//         result.push(r /arr2.length);
//         let s = arr3.reduce(function(a,b){
//             return a+b;
//         })
//         result.push(s/arr3.length);
//         let t = arr4.reduce(function(a,b){
//             return a+b;
//        }) 
//        result.push(t/arr4.length);
//     } 
//     console.log(result);
//     return result;
// };

// even_group_calculate_average ([1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14]);
// even_group_calculate_average ( [1, 3, 5, 7, 33, 55, 31, 555, 777]);
// even_group_calculate_average ([344, 256, 55, 777, 322, 180]);
// module.exports = even_group_calculate_average;
