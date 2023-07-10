var a = [1, 2, 3, 4, 5];
var sum = a.reduce((prev, current) => {
  return prev + current;
}, 0); //here 0 is initial previous value taken
console.log(sum)