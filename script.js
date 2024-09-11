// function menFromBoys(arr) {
//   arr = Array.from(new Set(arr));
//   let odd = arr.filter((a) => a % 2).sort((a, b) => b - a);
//   let even = arr.filter((a) => a % 2 === 0).sort((a, b) => a - b);
//   return even.concat(odd);
// }
// console.log(menFromBoys([7, 3, 14, 17]));

// function factorial(n) {
//   return n <= 1 ? factorial(n - 1) : 1;
// }
// console.log(factorial(1));

function factorial(n) {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}
console.log(factorial(1));
