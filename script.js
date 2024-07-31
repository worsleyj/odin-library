const library = [];

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (hasRead) {
        this.readStatus = "has been read";
    } else {
        this.readStatus = "not read yet";
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(bookOne);

addBookToLibrary(bookOne);
console.log(library[0].title);