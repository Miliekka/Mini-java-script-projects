/**Программа удаляет все вхождения числа element из массива, сохраняя порядок остальных чисел. */
let result = [];
function DeleteElem(Array,element){
for (item of Array){
    if (item !== element){
        result.push(item);
        }
    }
    return result;
}
let res = DeleteElem([1, 2 ,-1 ,4 ,5 ,-1 ,6],-1);
console.log(res);