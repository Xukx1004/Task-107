'use strict';
var is_exist_element = function(collection,element){
    let object = { '1':'ture','0':'false'};
    let cct = collection.filter(function(value){
        return  collection.indexOf(value) % 2 === 0;
    })
    
    if(cct.indexOf(element)>= 0){
        console.log(object[1]) ;
        return object[1];
    }
    if(cct.indexOf(element) === -1){
        console.log(object[0]);
        return object[0];
    }    
};

const collection = [1, 2, 3, 4, 5, 6];
is_exist_element(collection, 3);
is_exist_element(collection, 4);
module.exports = is_exist_element;
