const num = 9;
function factorialCalculator(num){
  let result = 1;
  for (let i = 1; i<=num;i++){
    result *=i;

  }
  return result;
}
const factorial = factorialCalculator(num);
console.log(`Factorial of ${num} is ${factorial}`)