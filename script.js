const bookTitleInput = document.querySelector('#book-title-input');
const bookAuthorInput = document.querySelector('#book-author-input');
const pagesInput = document.querySelector('#pages-input');
const yesRadio = document.querySelector('#yes-radio');
const noRadio = document.querySelector('#no-radio');
const addBookButton = document.querySelector('#add-book-button');
const libraryUl = document.querySelector('#library-ul');

const library = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

addBookButton.addEventListener('click', (event) => {
    event.preventDefault();

    let isBookReadText = '';

    if (yesRadio.checked) {
        isBookReadText = 'You have read this book';
    }
    else {
        isBookReadText = 'You have not read this book';
    }

    const book = new Book(
        crypto.randomUUID(),
        bookTitleInput.value,
        bookAuthorInput.value,
        pagesInput.value,
        isBookReadText
    );

    library.push(book);

    showLibrary();
});

function showLibrary() {
    library.forEach(book => {
        const bookLi = document.createElement('li');
        bookLi.textContent = Object.entries(book);

        libraryUl.appendChild(bookLi);
    });
}