export default class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    printInfo() {
        console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`);
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle !== 'string') {
            console.error("Error: Title should be string!")
            return
        }
        if (newTitle.length < 1){
            console.error("Error: Title can't be less than 1 character!");
            return
        }
        this._title = newTitle;
    }

    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string') {
            this._author = newAuthor;
        } else {
            console.log("Invalid author!");
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (typeof newYear === 'number' && newYear > 0) {
            this._year = newYear;
        } else {
            console.log("Invalid year!");
        }
    }

    static findOldestBook(books) {
        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}