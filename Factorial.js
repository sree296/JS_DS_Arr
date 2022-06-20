/* Factorial of a Number
* factorial(0) - 1         
* factorial(2) - 2*1 = 2   
* factorial(4) - 4*3*2*1 = 24
*/
function factorial(num) {
  var fact = 1;
  if(num === 0){
    
    return fact;
  }else{
    for(let i=1; i<=num; i++){
    fact = fact*i;
    }
    
    return fact;
  }
}
console.log(factorial(0));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(7));