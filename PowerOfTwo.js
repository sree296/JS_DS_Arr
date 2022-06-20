/* Power Of Two
*/
function powerOfTwo(num) {
    var powOf2 = 0;
    for(let i=0; powOf2<=num; i++){
      powOf2 = Math.pow(2,i);
      if(powOf2 === num) {
        return true;
      }
    }
    return false;
}

console.log(powerOfTwo(4));