const newBook = document.getElementById('new-book');
const container = document.getElementById('container');
const word = document.getElementById('word');

newBook.addEventListener('click',function(){
    container.style.display= 'block';
    word.style.display = 'none';
})
const myLibrary = [];
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}
function addBookToLibrary() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const book = new Book(title, author, pages);
    myLibrary.push(book);


}



function MyFunction(){
    const moonIcon = document.getElementById('moon');
    const lightIcon = document.getElementById('light');

    var element = document.body;
    element.classList.toggle("dark-mode");
    // moonIcon.classList.toggle('hidden');
    // lightIcon.classList.toggle('hidden');
}


const addBook = document.getElementById('submit');
addBook.addEventListener('click', function () {
    // Get values from the input fields
    const writer = document.getElementById('author').value;
    const pageCount = document.getElementById('pages').value;
    const title = document.getElementById('title').value;
    const readStatus = document.getElementById('read').value;

    if (writer === '' || pageCount === '' || title === '') {
    alert('Please fill all fields');
    } else {
    addBookToLibrary(writer, pageCount, title, readStatus);
    displayBook();
    }
});

function Book(writer, pageCount, title, readStatus) {
    this.writer = writer;
    this.pageCount = pageCount;
    this.title = title;
    this.read = readStatus;
}

const library = [];

// function displayBook() {
//     let output = '';
//     library.forEach(function (book) {
//     output += '<tr><td>' + book.writer + '</td><td>' + book.pageCount + '</td><td>' + book.title + '</td><td>' + book.read + '</td></tr>';
//     });
//     document.getElementById('library').innerHTML = output;
// }
function displayBook() {
  const bookList = document.getElementById("book-list");
  bookList.innerHTML = ""; // Clear the existing book list

  library.forEach(function (book) {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
      <td>${book.writer}</td>
      <td>${book.title}</td>
      <td>${book.pageCount}</td>
      <td>${book.read}</td>
    `;
    bookList.appendChild(newRow);
  });
}


function addBookToLibrary(writer, pageCount, title, readStatus) {
    const book = new Book(writer, pageCount, title, readStatus);
    library.push(book);
    displayBook();
}




