/**В программе дан отсортированный по возрастанию массив целых чисел и заданное число target. Если заданное число 
 * уже находится в массиве, вернется его индекс. Если числа в массиве нет, вернется индекс, где оно 
 * должно находиться, чтобы сохранить порядок сортировки.*/
function getIndex(Array, target) {
    let left = 0;
    let right = Array.length - 1;
    if (target > Array[right]) {
        return Array.length;
    } else if (target < Array[left]) {
        return 0;
    }
    while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (Array[middle] === target) {
            return middle;
        } else if (Array[middle] < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return left;
}

console.log(getIndex([5, 7, 9, 11, 13], 15));
console.log(getIndex([5, 7, 9, 11, 13], 2));
console.log(getIndex([5, 7, 9, 11, 13], 6));
console.log(getIndex([5, 7, 9, 11, 13], 7));