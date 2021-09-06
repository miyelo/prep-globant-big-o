module.exports = class Book {
  /**
   * @type string
   */
  name;

  /**
   * @type string
   */
  author;

  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  /**
   * BigO => O(1)
   */
  getAuthorLastName() {
    return this.author.split(" ", 2)[1] || ""; // safe flow when no last name exists
  }

  /**
   * BigO => O(n) where n is the books.length
   * @param {Books[]} books
   */
  static orderByAuthorLastName(books = []) {
    /**
     *
     * @param {Book} firstBook
     * @param {Book} secondBook
     * @returns
     */
    function orderCriteria(firstBook, secondBook) {
      const firstLastName = firstBook.getAuthorLastName().toLowerCase(),
        secondLastName = secondBook.getAuthorLastName().toLowerCase();

      return firstLastName.localeCompare(secondLastName);
    }

    const orderBooks = books.sort(orderCriteria);

    return orderBooks;
  }
};
