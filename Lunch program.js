const lunches = [];
function addLunchToEnd(array,Str1){
  array.push(Str1);
  console.log( Str1+ " added to the end of the lunch menu.");
  return array;
}
//console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));
//===================================
function addLunchToStart(array,Str1){
array.unshift(Str1);
console.log( Str1 + " added to the start of the lunch menu.");
return array;
}
//console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));
//===================================
function removeLastLunch(array){
    if (array.length == 0){
        console.log("No lunches to remove.");
    }else{
        console.log(array.pop()+" removed from the end of the lunch menu.");
        return array;
    }
}
//console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
//===================================
function removeFirstLunch(array){
  if (array.length != 0){
  let shiftedArray = array.shift();
  console.log(shiftedArray+" removed from the start of the lunch menu.")
  return array;
  }else{
  return(console.log("No lunches to remove."));
  }
}
//console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
//===================================
function getRandomLunch(array){
   if (array.length == 0){
    return(console.log("No lunches available."));
    }else{
    let ind = Math.round(Math.random()*(array.length-1));
    return(console.log("Randomly selected lunch: "+array[ind]));
   }
}
//console.log(getRandomLunch(lunches));
//===================================
function showLunchMenu(array){
  if (array.length == 0){
      return "The menu is empty.";
    }else{
      return "Menu items: " + array.join(", ");
  }
}
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));