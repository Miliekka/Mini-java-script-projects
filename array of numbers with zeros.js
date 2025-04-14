/**Функция берет на вход массив чисел с нулями и на выходе программа выводит строку из элементов массива, 
 * где все нули перемещены в конец, а порядок остальных чисел сохранён*/
const result = [];
function Null1(N) {
    let nonZeroCount = 0;
    for (let num of N) {
        if (num === 0) {
            result.push(num);
        } else {
            result.splice(nonZeroCount, 0, num);
            nonZeroCount++;
        }
    }
    return result;
}
let res = Null1([0, 0, 6, 0, 9, 8,9,7]);
console.log(res);