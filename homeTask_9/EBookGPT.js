
// Підключаємо файл класу Book
const Book = require('./Book');

class EBook extends Book {
    constructor(title, author, year, format) {
        super(title, author, year);
        this._format = format;
    }

    printInfo() {
        super.printInfo();
        console.log(`Format: ${this._format}`);
    }

    // Статичний метод для створення екземпляра EBook з екземпляра Book та формату файлу
    static createFromBook(book, format) {
        return new EBook(book.title, book.author, book.year, format);
    }
}

module.exports = EBook;
