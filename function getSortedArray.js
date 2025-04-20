function getSortedArray(Arr) {
    const res = [];
    const arrCopy = [...Arr];
    while (arrCopy.length > 0) { 
        const min = Math.min(...arrCopy);
        res.push(min);
        arrCopy.splice(arrCopy.indexOf(min), 1);
    }
    return res;
}

const sortedArray = getSortedArray([3, 2, 1, 8]);
console.log(sortedArray.join(" "));