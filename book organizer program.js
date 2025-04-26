/** Программа для фильтрации и сортировки списков книг. Программа фильтрует книги, выпущенные до 1960 года, 
 * и сортирует их по году выпуска в порядке возрастания. Использование функций высшего порядка filter и sort*/
const books = [{
    title:"Портрет Дориана Грея",
    authorName:"Оскар Уайльд",
    releaseYear:1890
  },
  {
    title:"Женщина в песках",
    authorName:"Кобо Абэ",
    releaseYear:1962
  },
  {
    title:"Код Да Винчи",
    authorName:"Дэн Браун",
    releaseYear:2003
  },
  {
    title:"Игрок",
    authorName:"Фёдор Достоевский",
    releaseYear:1866
  }]
  
  const sortByYear = (firstBook, secondBook) => {
    if (firstBook.releaseYear > secondBook.releaseYear) return 1;
    if (firstBook.releaseYear === secondBook.releaseYear) return 0;
    return -1;
  };
  const filteredBooks = books.filter((year) => year.releaseYear<1960);
  filteredBooks.sort(sortByYear);
  console.log(filteredBooks);
  
  