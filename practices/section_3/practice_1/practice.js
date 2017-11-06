function create_updated_collection(collection_a, object_b) {
  let cct =  object_b.value;
  for(let item of collection_a){
    for(let item1 of cct){
      console.log(cct);
      if(item.key === item1){
        item.count --;
      }
    }
  }
return collection_a;
}

let arr = create_updated_collection([
  {key: 'a', count: 2},
  {key: 'e', count: 2},
  {key: 'h', count: 2},
  {key: 't', count: 2},
  {key: 'f', count: 2},
  {key: 'c', count: 2},
  {key: 'g', count: 2},
  {key: 'b', count: 2},
  {key: 'd', count: 2}
],{value: ['a', 'd', 'e', 'f']}) ;
 console.log(arr);

module.exports = create_updated_collection;
