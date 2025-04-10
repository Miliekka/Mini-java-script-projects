/**Программа с функциями , которые считают:
 * -кол-во гласных букв в предложении
 * -кол-во согласных
 * -кол-во знаков пунктуации
 * -кол-во слов
 */
function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log(`Vowel Count: ${vowelCount}`);
getVowelCount('Apples are tasty fruits')
let count2 = 0;
const vowels = "aeiou";

function getConsonantCount(sentence){
  let count2 = 0;
  const vowels = "aeiou";
  for (const char1 of sentence.toLowerCase() ){
    if (vowels.includes(char1) != true && char1 >= 'a' && char1 <= 'z'){
      count2++;
      } 
  }
  return count2;
}
const ConsCount = getConsonantCount("Hello, World!");
console.log(`Consonant count: ${ConsCount}`);
   
function getPunctuationCount(sentence){
  const Letters = "bcdfghjklmnpqrstvwxyzaeiou"
  let count3 = 0;
  for (const char3 of sentence.toLowerCase()) {
    if (Letters.includes(char3) ==false && char3 != " ") {
      count3++;
    }
  }
  return count3;
}
const PuncCount = getPunctuationCount("What's going on here?");
console.log(`Punctuation Count: ${PuncCount}`);

function getWordCount(sentence){
  let count4 = 0;
  const trimmed = sentence.trim();
  if(trimmed === ""){
    return 0;
  }
  for(const char4 of trimmed){
    if (char4 === " "){
      count4++;
    }
  }
return count4+1;
}
const WordCount = getWordCount("");
console.log(`Word Count: ${WordCount}`);
