let fortune1 = "Ваш день будет прекрасен";
let fortune2 = "Вас собьет машина";
let fortune3 = "Вам повезет в любви";
let fortune4 = "Будет гроза";


let RandInt = Math.floor((Math.random()*(5-1))+1);
let Result;
switch (RandInt) {

    case 1:Result = fortune1
    break;
    case 2: Result = fortune2
    break;
    case 3: Result = fortune3
    break;
    case 4: Result = fortune4
    break;
}
    
console.log("Ваше предсказание на сегодня: " + Result);
