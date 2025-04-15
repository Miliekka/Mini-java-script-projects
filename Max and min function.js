function getMax(Array){
    let Max = -Infinity;
    for(num of Array){
        if (num > Max){
            Max = num;
            
        }
    }
    return Max;
}
let res = getMax([95, 87 ,100 ,92 ,85]);
console.log(res);

function getMin(Array){
    let Min = Infinity;
    for(num of Array){
        if (num < Min){
            Min = num;
            
        }
    }
    return Min;
}
let res2 = getMin([95, 87 ,100 ,92 ,85]);
console.log(res2);
