/**Дан отсортированный по возрастанию массив целых чисел и некоторое целое число.
 * Программа находит минимальный диапазон индексов (подмассив), в котором может находиться заданное число.
 * Использован метод экспоненциального поиска.*/
function getRange(Array, target){
    let border = 1;
    let lastElem = Array.length - 1;
    while(border<lastElem && Array[border]<target){
        if (Array[border]== target){
            return [border,border*2];
        }
        border *= 2;
        if (border>lastElem){
            return [border/2,lastElem];
        }

    }
    return [border/2,border];
}
console.log(getRange([8 ,11 ,12 ,16 ,18, 21 ,33, 36, 48 ,54, 63],16))
console.log(getRange([8 ,11 ,12, 16 ,18, 21, 33, 36 ,48, 54 ,63 ,64],36))