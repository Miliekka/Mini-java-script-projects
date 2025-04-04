/** Набор функций для расчета оценки учащегося, среднего балла по классу и статуса «сдал/не сдал»
на основе списка баллов и индивидуального балла учащегося.*/
function getAverage(scores) {
    let totalNum = 0;
    for (let i = 0; i < scores.length; i++) {
        totalNum += scores[i];
    }
    return totalNum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
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

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    let classAverage = getAverage(totalScores);
    let grade = getGrade(studentScore);
    if (grade === "F") {
        return "Class average: " + classAverage + ". Your grade: " + grade + ". You failed the course.";
    } else {
        return "Class average: " + classAverage + ". Your grade: " + grade + ". You passed the course.";
    }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));
