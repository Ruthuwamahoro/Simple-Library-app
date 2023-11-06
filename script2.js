const newBook = document.getElementById('new-book');
const container = document.getElementById('container');
const word = document.getElementById('word');

newBook.addEventListener('click', function () {
    container.style.display = 'block';
    word.style.display = 'none';
});

const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages);
    myLibrary.push(book);
    displayBook();
}


function displayBook() {
    const bookList = document.getElementById("book-list");

    // Clear existing rows
    while (bookList.rows.length > 0) {
        bookList.deleteRow(0);
    }

    myLibrary.forEach(function (book) {
        const newRow = bookList.insertRow(-1);
        const titleCell = newRow.insertCell(0);
        const authorCell = newRow.insertCell(1);
        const pagesCell = newRow.insertCell(2);

        titleCell.innerHTML = book.title;
        authorCell.innerHTML = book.author;
        pagesCell.innerHTML = book.pages;
    });
}

const addBook = document.getElementById('submit');
addBook.addEventListener('click', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    if (title === '' || author === '' || pages === '') {
        alert('Please fill all fields');
    } else {
        addBookToLibrary(title, author, pages);
    }
});

// Dark Mode Toggle
const moonIcon = document.getElementById('moon');
const lightIcon = document.getElementById('light');
const body = document.body;

moonIcon.addEventListener('click', function () {
    body.classList.add('dark-mode');
    moonIcon.style.display = 'none';
    lightIcon.style.display = 'inline';
});

lightIcon.addEventListener('click', function () {
    body.classList.remove('dark-mode');
    lightIcon.style.display = 'none';
    moonIcon.style.display = 'inline';
});
