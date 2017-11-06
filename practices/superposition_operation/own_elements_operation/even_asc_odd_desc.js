'use strict';
var even_asc_odd_desc = function(collection){
    let cct1 = collection.filter(function(value){
        return value % 2 ===0
     })
     
     let cct2 = collection.filter(function(value){
         return value % 2 != 0;
     })
    
     let result1 = cct1.sort(function(x,y){
         return x - y;
     })
     let result2 = cct2.sort(function(x,y){
        return y - x;
    })
    
    let result = [];
    for(let i = 0;i<result1.length;i++){
        result.push(result1[i])
    }
    
    for(let i = 0;i<result2.length;i++){
        result.push(result2[i])
    }
    return result;
    console.log(result);
    };
    
    const collection = [4, 32, 12, 45, 67, 46, 2, 53, 68, 54, 11];
    even_asc_odd_desc(collection);
    module.exports = even_asc_odd_desc;