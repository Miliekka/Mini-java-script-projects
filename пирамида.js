/** Программа , которая строит пирамиду с вершиной вниз если задано false,
 *  и с вершиной вверх если задано true */
function pyramid(str, count, isTrueFalse) {
  let result = "\n";
  
  if (isTrueFalse) {
      // Пирамида с вершиной вниз
      for (let i = 0; i < count; i++) {
          let spaces = " ".repeat(i);
          let chars = str.repeat(2 * (count - i) - 1);
          result += spaces + chars + "\n";
      }
  } else {
      // Пирамида с вершиной вверх
      for (let i = 0; i < count; i++) {
          let spaces = " ".repeat(count - i - 1);
          let chars = str.repeat(2 * i + 1);
          result += spaces + chars + "\n";
      }
  }
  
  return result;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));