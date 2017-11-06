function create_updated_collection(collection_a, object_b) {
  let answer = [];
  let obj = {};
  let cct = object_b.value;
  let b = -1;
  for(let item of collection_a){
      if(!obj[item]){
        obj[item] = {} ;
        obj[item].key = item ;
        obj[item].count = 1;
      }
      else{
        obj[item].count ++;   
      } 
   }
  for(let item in obj)
  {
    answer.push(obj[item]);
  }

  for(let item of answer){
    for(let item1 of cct){
      console.log(cct);
      if(item.key === item1){
        if(item.count >= 3){
          item.count = item.count - parseInt(item.count /3);
        }
      }
    }
  }
  
  return answer;
}

 let arr = create_updated_collection([
  'a', 'a', 'a',
  'e', 'e', 'e', 'e', 'e', 'e', 'e',
  'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
  't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
  'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
  'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
  'g', 'g', 'g', 'g', 'g', 'g', 'g',
  'b', 'b', 'b', 'b', 'b', 'b',
  'd', 'd', 'd', 'd', 'd'], {value: ['a', 'd', 'e', 'f']});
  console.log(arr);
module.exports = create_updated_collection;
