
class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`);
    }

    // Геттери та сеттери
    get title() {
        return this._title;
    }

    set title(newTitle) {
        // Валідація: перевірка чи новий заголовок не є пустим рядком
        if (newTitle.trim() !== "") {
            this._title = newTitle;
        } else {
            console.log("Invalid title!");
        }
    }

    // Статичний метод для знаходження найдавнішої книги
    static findOldestBook(books) {
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

module.exports = Book;
