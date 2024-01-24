const odinLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.hasRead = function() {
        if (this.read == true) {
            return "has been read";
        } else {
            return "has not been read";
        }
    }
}


function addToLibrary(book) {
    odinLibrary.push(book)
}

function displayBook(book) {
    var libraryTable = document.getElementById("library-table");
    let row = libraryTable.insertRow(0);

    let title = row.insertCell(0);
    title.textContent = book.title;

    let author = row.insertCell(1);
    author.textContent = book.author;

    let pages = row.insertCell(2);
    pages.textContent = book.pages

    let read = row.insertCell(3);
    read.textContent = book.hasRead()
}

function displayLibrary(library) {
    for (i = 0; i < library.length; i++) {
        console.log(library[i].title);
        displayBook(library[i]);
    }
}

const book = new Book("Book", "Author", 100, false)
const book2 = new Book("Book2", "Author", 100, true)

addToLibrary(book)
addToLibrary(book2)
addToLibrary(book)
// console.log(odinLibrary)
displayLibrary(odinLibrary)