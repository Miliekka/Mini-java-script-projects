/** Эта программа реализует систему управления оценками, которая вычисляет средние баллы класса, 
 присваивает буквенные оценки, определяет статус прохождения и генерирует сообщения об успеваемости учащихся.*/
function getAverage(getRes){
  let classAverage;
  let sumOfGrades = 0;
for (let Grade of getRes){
  sumOfGrades += Grade;
}
classAverage = sumOfGrades/getRes.length
return classAverage;
}
function getGrade(score){
  if (score === 100) {
      return "A+";
  } else if (score >= 90 && score <= 99) {
      return "A";
  } else if (score >= 80 && score <= 89) {
      return "B";
  } else if (score >= 70 && score <= 79) {
      return "C";
  } else if (score >= 60 && score <= 69) {
      return "D";
  } else {
      return "F";
  }
}
function hasPassingGrade(score){
 let score2 = getGrade(score);
 if (score2 === "F"){
   return false;
 }else {
   return true;
 }
}

function studentMsg(getRes,StudentsGrade){
getRes = getAverage(getRes);
StudentsGrade = getGrade(StudentsGrade);
if (hasPassingGrade(StudentsGrade)== false){
  return `Class average: ${getRes}. Your grade: ${StudentsGrade}. You failed the course.`;
}else{
  return `Class average: ${getRes}. Your grade: ${StudentsGrade}.You passed the course.`;
}
}

