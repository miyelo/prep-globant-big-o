const Book = require("./Book");

const books = [
  { name: "Harry Potter", author: "Joanne Rowling" },
  { name: "Warcross", author: "Marie Lu" },
  { name: "The Hunger Games", author: "Suzanne Collins" },
];

const booksInit = books.map((book) => new Book(book.name, book.author));
const booksOrdered = Book.orderByAuthorLastName(booksInit);

console.log(booksOrdered);

// This implementation had the most unfavorable is O(n)
