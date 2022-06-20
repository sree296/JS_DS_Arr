/* Fibonacci Series
* input 3 - output [0,1,1]         // lenght=3
* input 5 - output [0,1,1,2,3]     // lenght=5
* input 7 - output [0,1,1,2,3,5,8] // lenght=7
*/
function fibonacci(num) {
  const fibArr = [0,1];
  for(let i=2; i<num; i++){
    fibArr[i] = fibArr[i-1] + fibArr[i-2];
  }
  return fibArr;
}

console.log(fibonacci(3));
console.log(fibonacci(5));
console.log(fibonacci(7));