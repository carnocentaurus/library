const bookTitleInput = document.querySelector('#book-title-input');
const bookAuthorInput = document.querySelector('#book-author-input');
const pagesInput = document.querySelector('#pages-input');
const yesRadio = document.querySelector('#yes-radio');
const noRadion = document.querySelector('#no-radio')
const libraryUl = document.querySelector('#library-ul');

const library = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const book1 = new Book(
        crypto.randomUUID(), 
        'One Piece', 
        'Eichiiro Oda', 
        200, 
        true
    );

    const book2 = new Book(
        crypto.randomUUID(),
        'Naruto',
        'Masashi Kishimoto',
        200,
        true
    );

    library.push(book1);
    library.push(book2);
}

addBookToLibrary();

function showLibrary() {
    library.forEach(book => {
        const bookLi = document.createElement('li');
        bookLi.textContent = Object.entries(book);

        libraryUl.appendChild(bookLi);
    });
}

showLibrary();