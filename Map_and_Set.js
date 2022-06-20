const map = new Map([['a',1], ['b',9]]);

for(const [key, value] of map){
  console.log(`${key}: ${value}`)
}
  console.log("++++++++");
const set = new Set([1,2,3,4]);
for(const item of set){
  console.log(item);
}
  console.log("++++++++");
  console.log(set.size);