import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, author, year, format) {
    super(title, author, year);
    this._format = format;
  }

  printInfo() {
    super.printInfo();
    console.log(`Format: ${this._format}`);
  }

  get format() {
    return this._format;
  }

  set format(newFormat) {
    if (typeof newFormat !== 'string') {
      console.error('Error: Invalid format!');
      return;
    }

    this._format = newFormat;
  }

  static createFromBook(book, format) {
    return new EBook(book.title, book.author, book.year, format);
  }
}
