
// Підключаємо файли класів
const Book = require('./Book');
const EBook = require('./EBook');

// 1. Створюємо декілька екземплярів класу Book та викликаємо метод printInfo для кожного екземпляру
const book1 = new Book('Title 1', 'Author 1', 2000);
const book2 = new Book('Title 2', 'Author 2', 2010);

book1.printInfo();
book2.printInfo();

// 2. Створюємо екземпляр класу EBook та викликаємо метод printInfo
const ebook1 = new EBook('E-Title 1', 'E-Author 1', 2020, 'pdf');
ebook1.printInfo();

// 3. Використовуємо геттери та сеттери
console.log(book1.title); // Використання геттера
book1.title = 'New Title'; // Використання сеттера
console.log(book1.title); // Використання геттера для перевірки змін

// 4. Виклик статичного методу класу Book
const oldestBook = Book.findOldestBook([book1, book2, ebook1]);
console.log("Oldest Book:");
oldestBook.printInfo();

// 5. Виклик статичного методу класу EBook
const ebookFromBook = EBook.createFromBook(book1, 'epub');
console.log("EBook from Book:");
ebookFromBook.printInfo();
