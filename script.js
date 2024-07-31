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

function displayLibrary() {
    library.forEach((book) => {
        console.log(book);
    });
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const bookTwo = new Book("The Hobbit 2", "J.R.R. Tolkien", 249, true);


addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
displayLibrary();