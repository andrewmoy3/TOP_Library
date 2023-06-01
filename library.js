let myLibrary = [];

function Book(author, title, numPages, checkedOut) {
    this.author = author;
    this.title = title;
    this.numPages = numPages;
    this.checkedOut = checkedOut;
}

function addBookToLibrary(author, title, numPages, checkedOut) {
    const newBook = new Book(author, title, numPages, checkedOut);
    myLibrary.push(newBook);
}

function displayBooks(){
    for(book of myLibrary){
        const author = document.createElement("div");
        author.textContent = book.author;
        const title = document.createElement("div")
        title.textContent = book.title;
        const numPages = document.createElement("div");
        numPages.textContent = book.numPages;
        const checkedOut = document.createElement("div");
        checkedOut.textContent = book.checkedOut;

        const bookCard = document.createElement("div");
        bookCard.classList = "card";
        bookCard.id = "card";
        bookCard.appendChild(author);
        bookCard.appendChild(title);
        bookCard.appendChild(numPages);
        bookCard.appendChild(checkedOut);

        let library = document.getElementById("library");
        library.appendChild(bookCard);
    }
}

function makeBookForm(){
    document.getElementById
}

function main(){
    makeBookForm();
    addBookToLibrary("Mike Lupica", "The Batboy", 233, true);
    addBookToLibrary("Judy Blume", "Fudge", 188, false);
    addBookToLibrary("Andrew Clements", "Lunch Money", 277, true);
    displayBooks();
}

main();