const bookTitleInput = document.querySelector('#book-title-input');
const bookAuthorInput = document.querySelector('#book-author-input');
const pagesInput = document.querySelector('#pages-input');
const yesRadio = document.querySelector('#yes-radio');
const noRadio = document.querySelector('#no-radio');
const addBookButton = document.querySelector('#add-book-button');
const showLibraryButton = document.querySelector('#show-library-button');
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
        parseInt(pagesInput.value),
        isBookReadText
    );

    if (bookTitleInput.value.length > 150) {
        alert("Book title can't be more than 150 characters!");
        return;
    }
    if (bookTitleInput.value.trim() === '') {
        alert('Please enter book title!');
        return;
    }
    if (bookAuthorInput.value.length > 70) {
        alert("Book author can't be more than 70 characters!");
        return;
    }
    if (bookAuthorInput.value.trim() === '') {
        alert('Please enter book author!');
        return;
    }
    if (Number(pagesInput.value) < 1) {
        alert('Book must have at least one page!');
        return false;
    }
    if (Number(pagesInput.value) > 10000) {
        alert("Number of pages can't be more than 10,000!");
        return;
    }

    library.push(book);

    alert('Book added to library');
});

showLibraryButton.addEventListener('click', () => {
    if (library.length === 0) {
        alert('Your library is empty. Add a book');
        return;
    }

    library.forEach(book => {
        const bookLi = document.createElement('li');
        bookLi.textContent = Object.entries(book);

        libraryUl.appendChild(bookLi);
    });
});