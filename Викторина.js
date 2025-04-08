
/**Это  программа игра-викторина. Она генерирует случайный вопрос из предопределенного списка,
 *  выбирает случайный выбор компьютера из доступных вариантов и оценивает, соответствует ли выбор 
 * компьютера правильному ответу. */
const questions = [
  {
    category: "Литература",
    question: "Кто написал роман 'Война и мир'?",
    choices: ["Лев Толстой", "Федор Достоевский", "Александр Пушкин"],
    answer: "Лев Толстой"
  },
  {
    category: "География",
    question: "Какая река является самой длинной в мире?",
    choices: ["Амазонка", "Нил", "Янцзы"],
    answer: "Нил"
  },
  {
    category: "Физика",
    question: "Какой закон Ньютона описывает силу как произведение массы и ускорения?",
    choices: ["Первый", "Второй", "Третий"],
    answer: "Второй"
  },
  {
    category: "История",
    question: "В каком году началась Вторая мировая война?",
    choices: ["1939", "1941", "1945"],
    answer: "1939"
  },
  {
    category: "Биология",
    question: "Как называется процесс превращения гусеницы в бабочку?",
    choices: ["Митоз", "Метаморфоз", "Фотосинтез"],
    answer: "Метаморфоз"
  }
];
  function getRandomQuestion(questions){
    const rand = Math.floor(Math.random() * questions.length);
    return questions[rand];
  };
  function getRandomComputerChoice(choices){
    const rand = Math.floor(Math.random()*choices.length);
    return choices[rand];
  }
  function getResults(questions,computerChoice){
    if (computerChoice == questions.answer) {
     return "Выбор компьютера верный!";
  } else {
    return `Выбор компьютера не верный :( Правильный ответ:  ${questions.answer}`;
  }
}
  
const randomQuestion = getRandomQuestion(questions); 
const computerChoice = getRandomComputerChoice(randomQuestion.choices); 
console.log("Вопрос:", randomQuestion.question);
console.log("Выбор компьютера:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));
