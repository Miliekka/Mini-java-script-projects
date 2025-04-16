/**Задача:
 * Ваша задача — найти номер последнего проверенного контейнера (последнего чётного числа в массиве). 
 * Если в массиве нет чётных чисел, вернуть -1. */
function ifEven(Array){
 let right = Array.length-1;
 for(;right >= 0;right--){
    if (Array[right]%2==0){
        return Array[right];
        }
    }
    return -1;
}
let res2 = ifEven([7, 3, 1 ,10,5,11, 12, 19, 21]);
console.log(res2);