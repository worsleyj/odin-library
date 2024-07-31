const library = [];

const modal = document.querySelector(".modal");
const button = document.querySelector(".new-book");
button.addEventListener("click", () => {
    modal.showModal();
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

function displayLibrary() {
    const libraryContainer = document.querySelector(".library-container");
    library.forEach((book) => {
        const bookCard = document.createElement("div");
        const titleAuthor = document.createElement("div");
        const pageNumber = document.createElement("div");
        const readStatus = document.createElement("div");

        bookCard.setAttribute("class", "book-card");
        titleAuthor.setAttribute("class", "title-author");
        pageNumber.setAttribute("class", "page-number");
        readStatus.setAttribute("class", "read-status");

        titleAuthor.textContent = book.title + " by " + book.author;
        pageNumber.textContent = book.pages;
        readStatus.textContent = book.read;

        bookCard.appendChild(titleAuthor);
        bookCard.appendChild(pageNumber);
        bookCard.appendChild(readStatus);
        libraryContainer.prepend(bookCard);
    });
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const bookTwo = new Book("The Hobbit 2", "J.R.R. Tolkien", 249, true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
displayLibrary();