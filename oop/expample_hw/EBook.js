import Book from './Book.js';

export default class EBook extends Book {
  constructor(title, fileFormat) {
    super(title);
    this._fileFormat = fileFormat;
  }

  static fromBookAndFileFormat(book, fileFormat) {
    return new EBook(book.title, fileFormat);
  }
}
