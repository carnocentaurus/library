const message = document.querySelector('#message');
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

function handleMessageDisplay(messageText, type) {
    if (type === 'error') {
        message.classList.add('error');
    }
    else {
        message.classList.add('success');
        setTimeout(() => message.textContent = '', 5000);
    }
    
    message.textContent = messageText;
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
        handleMessageDisplay("Book title can't be more than 150 characters", 'error');
        return;
    }
    if (bookTitleInput.value.trim() === '') {
        handleMessageDisplay('Enter book title', 'error');
        return;
    }
    if (bookAuthorInput.value.length > 70) {
        handleMessageDisplay("Book author can't be more than 70 characters", 'error');
        return;
    }
    if (bookAuthorInput.value.trim() === '') {
        handleMessageDisplay('Enter book author', 'error');
        return;
    }
    if (bookPagesInput.value.trim() === '') {
        handleMessageDisplay('Enter number of pages', 'error');
        return;
    }
    if (parseInt(bookPagesInput.value) < 1) {
        handleMessageDisplay('Book must have at least one page', 'error');
        return false;
    }
    if (parseInt(bookPagesInput.value) > 10000) {
        handleMessageDisplay("Number of pages can't be more than 10000", 'error');
        return;
    }

    library.push(book);

    handleMessageDisplay('Book added to library', 'success');

    showLibrary();
});