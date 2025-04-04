//Функция для определения, является ли данный год високосным, на основе стандартных правил високосного года.
let year = 1900;
function isLeapYear(year){
if (year%4 === 0 && year%100 !== 0 || year%400 === 0 ){
   return `${year} is a leap year.`
}else{
  return `${year} is not a leap year.`
}
}
let result = isLeapYear(year);
console.log(result);
