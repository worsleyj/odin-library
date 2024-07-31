const library = [];
const libraryContainer = document.querySelector(".library-container");

const modal = document.querySelector(".modal");

const submitBtn = document.querySelector(".submit");
submitBtn.addEventListener("click", () => {
    const newTitle = document.getElementById("new-title")
    const newAuthor = document.getElementById("new-author");
    const newPages = document.getElementById("new-pages");
    const newReadStatus = document.querySelector("#new-read-status").checked;
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newReadStatus)
    
    addBookToLibrary(newBook);
    displayLibrary();
    console.log(library);
    // displayBook(newBook);
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

function displayBook(book, index) {
    const bookCard = document.createElement("div");
    const delBtn = document.createElement("button");
    const titleAuthor = document.createElement("div");
    const pageNumber = document.createElement("div");
    const readStatus = document.createElement("div");

    delBtn.textContent = "Delete";
    delBtn.setAttribute("class", "del-btn");
    delBtn.addEventListener("click", () => {
        
    })
    bookCard.setAttribute("class", "book-card");
    bookCard.setAttribute("data-index", index);
    titleAuthor.setAttribute("class", "title-author");
    pageNumber.setAttribute("class", "page-number");
    readStatus.setAttribute("class", "read-status");

    titleAuthor.textContent = book.title + " by " + book.author;
    pageNumber.textContent = book.pages + " pages";
    readStatus.textContent = book.read;

    bookCard.appendChild(titleAuthor);
    bookCard.appendChild(pageNumber);
    bookCard.appendChild(readStatus);
    bookCard.appendChild(delBtn);
    libraryContainer.prepend(bookCard);
}

function addNewBookButton() {
    const newBookBtn = document.createElement("button");
    newBookBtn.setAttribute("class", "book-card new-book");
    newBookBtn.textContent = "Add a New Book";
    libraryContainer.appendChild(newBookBtn);

    const button = document.querySelector(".new-book");
    button.addEventListener("click", () => {
    modal.showModal();
})
}

function displayLibrary() {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.lastChild);
    }
    addNewBookButton();
    let index = -1;
    library.forEach((book) => {
        index++;
        displayBook(book, index);
    });
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const bookTwo = new Book("The Hobbit 2", "J.R.R. Tolkien", 249, true);

addBookToLibrary(bookOne);
addBookToLibrary(bookTwo);
displayLibrary();
