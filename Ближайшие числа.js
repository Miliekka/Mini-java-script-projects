/**Программа, которая находит разницу между соседними элементами массива и выводит числа с минимальной разностью*/
function MinimumDiff(Array){
    let res = [];
    let min = Infinity;
    for(let i = 0;i<Array.length-1;i++){
        let Diff = Math.abs(Array[i]-Array[i+1]);
        if (Diff < min){
            min = Diff;
            res = [Array[i],Array[i+1]];
           }
        
    }
    return res.join(' ');
}
res2 = MinimumDiff([1 ,3 ,5,11]);
console.log(res2)