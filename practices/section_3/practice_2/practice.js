function create_updated_collection(collection_a, object_b) {
  let cct = object_b.value;
  for(let item of collection_a){
    for(let item1 of cct){
      console.log(item.key);
      console.log(item1);
      if(item.key === item1){
        if(item.count >= 3){
          item.count = item.count - parseInt(item.count /3);
        }
      }
    }
  }
return collection_a;
}

let arr = create_updated_collection([
  {key: 'a', count: 3},
  {key: 'e', count: 7},
  {key: 'h', count: 11},
  {key: 't', count: 20},
  {key: 'f', count: 9},
  {key: 'c', count: 8},
  {key: 'g', count: 7},
  {key: 'b', count: 6},
  {key: 'd', count: 5}
],{value: ['a', 'd', 'e', 'f']}) ;
 console.log(arr);
module.exports = create_updated_collection;
