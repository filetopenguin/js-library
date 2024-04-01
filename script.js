let myLibrary = [];

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();

}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click",function(){
    let newBookForm = document.querySelector("#new-book-form");
    newBookForm.style.display = "block";
})

function render(){
    let libraryEl = document.querySelector("#library");
    for(let i = 0; i<myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML =`<p>${book.title}</p>`;
        libraryEl.appendChild(bookEl);

    }
}
document.querySelector("#new-book-form").addEventListener("submit",function(){
    event.preventDefault();
    addBookToLibrary();
})