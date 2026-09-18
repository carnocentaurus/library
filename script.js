const bookTitleInput = document.querySelector('#book-title-input');
const bookAuthorInput = document.querySelector('#book-author-input');
const bookPagesInput = document.querySelector('#book-pages-input');
const yesRadio = document.querySelector('#yes-radio');
const noRadio = document.querySelector('#no-radio');
const addBookButton = document.querySelector('#add-book-button');
const tbody = document.querySelector('tbody');

const library = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleReadStatus = function() {
    alert(true)
}

const bookObject = new Book();

function showLibrary() {
    tbody.innerHTML = '';

    library.forEach(book => {
        const tr = document.createElement('tr');

        const bookId = document.createElement('td');
        bookId.textContent = book.id;

        const bookTitle = document.createElement('td');
        bookTitle.textContent = book.title;

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = book.author;

        const bookPages = document.createElement('td');
        bookPages.textContent = book.pages;

        const isBookRead = document.createElement('td');
        isBookRead.textContent = book.read;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', removeBookFromLibrary);

        const toggleReadStatusButton = document.createElement('button');
        toggleReadStatusButton.textContent = 'Toggle Read Status';
        toggleReadStatusButton.addEventListener('click', bookObject.toggleReadStatus);

        tr.appendChild(bookId);
        tr.appendChild(bookTitle);
        tr.appendChild(bookAuthor);
        tr.appendChild(bookPages);
        tr.appendChild(isBookRead);
        tr.appendChild(removeButton);
        tr.appendChild(switchReadStatusButton);

        tbody.appendChild(tr);
    });
}

function removeBookFromLibrary(event) {
    library.splice(event.target.parentElement, 1);
    showLibrary();
}

addBookButton.addEventListener('click', (event) => {
    event.preventDefault();

    let isBookReadText = '';

    if (yesRadio.checked) {
        isBookReadText = 'Was read';
    }
    else {
        isBookReadText = 'Not read';
    }

    const book = new Book(
        crypto.randomUUID(),
        bookTitleInput.value,
        bookAuthorInput.value,
        parseInt(bookPagesInput.value),
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
    if (parseInt(bookPagesInput.value) < 1) {
        alert('Book must have at least one page!');
        return false;
    }
    if (parseInt(bookPagesInput.value) > 10000) {
        alert("Number of pages can't be more than 10,000!");
        return;
    }

    library.push(book);

    alert('Book added to library');

    showLibrary();
});