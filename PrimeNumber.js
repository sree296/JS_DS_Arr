/* Prime Number
*/
function isPrime(num) {
    if(num<2){
      return false;
    }
/* Eg: num = 24, Math.sqrt(24) = 4.89. 
So, you there must a number before 4.89 which is a multiplier of 24. they are 24%2 =0, 24%3=0, 24%4=0 .
No need to check for 24%6=0 as it is already proven that, 24 is a Prime Number.
Eg: num = 15, Math.sqrt(15) = 3.87
so, there must be a number before 3.87.
that is 15%3=0. So no need to check for 15%5=0.
*/
  for(let i=2; i<Math.sqrt(num); i++){
      if(num%i === 0) {
        return false;
      }
    }
    return true;
}

console.log(isPrime(5)); // true i.e only 1*5, 5*1
console.log(isPrime(15)); // false i.e 1*15, 3*5, 5*3, 15*1 more than 2 secnarios
console.log(isPrime(7)); // true only 1*7, 7*1