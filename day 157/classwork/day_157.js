class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  getInfo() {
    return `${this.title} by ${this.author}, ${this.pages} pages`;
  }

  isLong() {
    return this.pages > 300;
  }
}
const myBook = new Book("The Hobbit", "J.R.R. Tolkien", 310);
console.log(myBook.getInfo());
console.log(myBook.isLong());