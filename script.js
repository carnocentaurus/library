const library = [];

function Book(id, title, author, pages, read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const bookId = crypto.randomUUID();

    const newBook = new Book(
        bookId, 
        'One Piece', 
        'Eichiiro Oda', 
        200, 
        true
    );

    library.push(newBook);
}

addBookToLibrary();