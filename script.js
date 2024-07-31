const library = [];

const modal = document.querySelector(".modal");
const button = document.querySelector(".new-book");
button.addEventListener("click", () => {
    modal.showModal();
})

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
    const newTitle = document.getElementById("new-title")
    const newAuthor = document.getElementById("new-author");
    const newPages = document.getElementById("new-pages");
    const newReadStatus = document.querySelector("#new-read-status").checked;
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newReadStatus)
    
    addBookToLibrary(newBook);
    displayBook(newBook);
})

function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    if (hasRead) {
        this.read = "has been read";
    } else {
        this.read = "not read yet";
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function displayBook(book) {
    const libraryContainer = document.querySelector(".library-container");
    const bookCard = document.createElement("div");
    const titleAuthor = document.createElement("div");
    const pageNumber = document.createElement("div");
    const readStatus = document.createElement("div");

    bookCard.setAttribute("class", "book-card");
    titleAuthor.setAttribute("class", "title-author");
    pageNumber.setAttribute("class", "page-number");
    readStatus.setAttribute("class", "read-status");

    titleAuthor.textContent = book.title + " by " + book.author;
    pageNumber.textContent = book.pages + " pages";
    readStatus.textContent = book.read;

    bookCard.appendChild(titleAuthor);
    bookCard.appendChild(pageNumber);
    bookCard.appendChild(readStatus);
    libraryContainer.prepend(bookCard);
}
function displayLibrary() {
    library.forEach((book) => {displayBook(book)});
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const bookTwo = new Book("The Hobbit 2", "J.R.R. Tolkien", 249, true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
displayLibrary();
