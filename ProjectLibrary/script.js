const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// Function to add book to the library book object array

function addBookToLibrary(title, author, pages, read) {
    const myBook = new Book(title, author, pages, read);
    myLibrary.push(myBook);
    console.log(myBook.title + " added to library...");
    updateLibraryUI(myBook)
}

function removeBook(index) {
    myLibrary.splice(index,1)
    updateLibraryUI()
}

// Adds card for each book in the array and puts its information onto the page

function updateLibraryUI() {
    const wrapper = document.querySelector(".wrapper");
    // Clear the wrapper
    wrapper.innerHTML = "";
    // Re-render each book card
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        bookCard.innerHTML = `
            <h2>Title: <span class='Tvalue'>${book.title}</span></h2>
            <h2>Author: <span class='Avalue'>${book.author}</span></h2>
            <h2>Pages: <span class='Pvalue'>${book.pages}</span></h2>
            <h2 class="flexParent">Read: <div class="flex"><span class='Rvalue'>${book.read}</span></div><button class="remove" data-index="${index}">x</button> </h2>
        `;
        wrapper.appendChild(bookCard);
    });
}

var modal = document.getElementById("myModal");
var btn = document.querySelector(".addbook");
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks on the button, open the modal
btn.onclick = openModal;

// When the user clicks on <span> (x), close the modal
span.onclick = closeModal;

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }

};

let Form = document.querySelector(".addform");


Form.addEventListener("submit", (e) => {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("read").checked

    addBookToLibrary(title, author, pages, read);
    closeModal()
})

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove")) {
        const index = parseInt(e.target.getAttribute("data-index"));
        // Remove the book and update the UI
        removeBook(index);
    }
})


console.log(myLibrary);