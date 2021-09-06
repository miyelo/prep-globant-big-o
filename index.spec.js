const Book = require("./Book");

test("should return the array order", () => {
  const books = [
    { name: "Harry Potter", author: "Joanne Rowling" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "The Hunger Games", author: "Suzanne Collins" },
  ];

  const booksSorterByLastName = Book.orderByAuthorLastName(
    books.map((book) => new Book(book.name, book.author))
  );

  console.log(booksSorterByLastName);

  expect(booksSorterByLastName).toMatchObject([
    { name: "The Hunger Games", author: "Suzanne Collins" },
    { name: "Warcross", author: "Marie Lu" },
    { name: "Harry Potter", author: "Joanne Rowling" },
  ]);
});

test("should return the lastName", () => {
  const book = new Book();
  book.author = "Joanne Rowling";

  const lastName = book.getAuthorLastName();

  expect(lastName).toBe("Rowling");
});
