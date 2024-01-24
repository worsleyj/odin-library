const odinLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addToLibrary(book) {
    odinLibrary.push(book)
}

function displayLibrary(library) {
    for (const book in library) {
        console.log(library[book].title)
    }
}

const book = new Book("Book", "Author", 100, false)
const book2 = new Book("Book2", "Author", 100, false)

addToLibrary(book)
addToLibrary(book2)
addToLibrary(book)
console.log(odinLibrary)
displayLibrary(odinLibrary)