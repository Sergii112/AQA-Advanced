import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('Loot', 'Tania James', 2023);
const book2 = new Book('The MANIAC', 'Benjamín Labatut', 2020);

book1.printInfo();
book2.printInfo();

const ebook1 = new EBook('E-Story', 'E-me', 2021, 'pdf');
ebook1.printInfo();

console.log('-----------------------------');

console.log('Old Title:', book1.title);
book1.title = 'Ogogo';
console.log('New Title:', book1.title);

console.log('Old Author:', book1.author);
book1.author = 'John Smith';
console.log('New Author:', book1.author);

console.log('Old year:', book1.year);
book1.year = 2001;
console.log('New year:', book1.year);

console.log('-----------------------------');

const oldestBook = EBook.findOldestBook([book1, book2, ebook1]);
console.log('Oldest Book:');
oldestBook.printInfo();

console.log('-----------------------------');

const ebook = EBook.createFromBook(book1, 'pdf');
console.log('EBook from Book:');
ebook.printInfo();
