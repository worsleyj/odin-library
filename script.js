const odinLibrary = [];

const bookDialog = document.querySelector('.book-dialog')
const openDialog = document.querySelector('.add-book')
const closeDialog = document.querySelector('.cancel-dialog')
const submitDialog = document.querySelector('.submit-book')
let index = 0;

openDialog.addEventListener('click', () => {
    bookDialog.showModal();
})

closeDialog.addEventListener('click', () => {
    bookDialog.closeModal();
})

submitDialog.addEventListener('click', () => {
    index++;
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const hasRead = document.querySelector('#hasRead').checked; // boolean value of html checkbox
    const book = new Book(title, author, pages, hasRead, index);

    addToLibrary(book);
    displayBook(book);
})

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
    this.hasRead = function() {
        if (this.read == true) {
            return "Read";
        } else {
            return "Not Read";
        }
    }
}


function addToLibrary(book) {
    odinLibrary.push(book)
}

function displayBook(book) {
    var libraryTable = document.getElementById("library-table");
    let row = libraryTable.insertRow(-1);

    let title = row.insertCell(0);
    title.textContent = book.title;

    let author = row.insertCell(1);
    author.textContent = book.author;

    let pages = row.insertCell(2);
    pages.textContent = book.index;

    let read = row.insertCell(3);
    read.textContent = book.hasRead();
    
    const btn = document.createElement('button')
    btn.innerText = 'x';
    btn.addEventListener('click', () => {
        libraryTable.deleteRow(book.index+1);
    })

    let remove = row.insertCell(4);
    remove.appendChild(btn)

}

function displayLibrary(library) {
    for (i = 0; i < library.length; i++) {
        console.log(library[i].title);
        displayBook(library[i]);
    }
}

const book = new Book("Book", "Author", 100, false, index)
index++;
const book2 = new Book("Book2", "Author", 100, true, index)
index++;
const book3 = new Book("Book3", "Author", 100, true, index)
index++;
const book4 = new Book("Book4", "Author", 100, true, index)


addToLibrary(book)
addToLibrary(book2)
addToLibrary(book3)
addToLibrary(book4)
displayLibrary(odinLibrary)