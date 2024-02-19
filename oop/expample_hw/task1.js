import Book from "./Book.js";
import EBook from "./EBook.js";

const book = new Book("Harry Potter")

// book.title = ""
// book.title = true

const ebook = EBook.fromBookAndFileFormat(book, "PDF")