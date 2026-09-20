const errorMessage = document.querySelector('.error-message');
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

Book.prototype.toggleReadStatus = function(event) {
    const targetBookId = event.target.parentElement.firstChild.innerText;
    const targetBookIndex = library.map(book => book.id).indexOf(targetBookId);
    
    if (library[targetBookIndex].read === 'Was read') {
        library[targetBookIndex].read = 'Not read';
    }
    else if (library[targetBookIndex].read === 'Not read') {
        library[targetBookIndex].read = 'Was read';
    }

    event.target.previousSibling.innerText = library[targetBookIndex].read;
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

        const toggleReadStatusButton = document.createElement('button');
        toggleReadStatusButton.textContent = 'Toggle Read Status';
        toggleReadStatusButton.addEventListener('click', bookObject.toggleReadStatus);

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', removeBookFromLibrary);

        tr.appendChild(bookId);
        tr.appendChild(bookTitle);
        tr.appendChild(bookAuthor);
        tr.appendChild(bookPages);
        tr.appendChild(isBookRead);
        tr.appendChild(toggleReadStatusButton);
        tr.appendChild(removeButton);

        tbody.appendChild(tr);
    });
}

function removeBookFromLibrary(event) {
    if (confirm('Remove book from library?')) {
        library.splice(event.target.parentElement, 1);
        showLibrary();
    }
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
        errorMessage.textContent = "Book title can't be more than 150 characters";
        return;
    }
    if (bookTitleInput.value.trim() === '') {
        errorMessage.textContent = 'Enter book title';
        return;
    }
    if (bookAuthorInput.value.length > 70) {
        errorMessage.textContent = "Book author can't be more than 70 characters";
        return;
    }
    if (bookAuthorInput.value.trim() === '') {
        errorMessage.textContent = 'Enter book author';
        return;
    }
    if (bookPagesInput.value.trim() === '') {
        errorMessage.textContent = 'Enter number of pages';
        return;
    }
    if (parseInt(bookPagesInput.value) < 1) {
        errorMessage.textContent = 'Book must have at least one page';
        return false;
    }
    if (parseInt(bookPagesInput.value) > 10000) {
        errorMessage.textContent = "Number of pages can't be more than 10,000";
        return;
    }

    library.push(book);

    alert('Book added to library!');
    errorMessage.textContent = '';

    showLibrary();
});