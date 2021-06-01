let myLibrary = JSON.parse(localStorage.getItem('books')) || [];
// We push the values to our array and printed. If there is nothing, we print an empty array, otherwise we get our localStorge data.

const addBook = (event) => {
// We create the fields so that we can fill our array.
    var fields = {
      title: document.getElementById("title").value,
      author: document.getElementById("author").value,
      pages: document.getElementById("pages").value,
      checkbox: document.getElementById("checkbox").checked
    };


myLibrary.push(fields)

renderBooks()

}


function renderBooks() {

localStorage.setItem('books', JSON.stringify(myLibrary))
myLibrary = JSON.parse(localStorage.getItem('books'))

//We map through the array and print the necessary data to our HTML so that the client can see it.

document.getElementById('bookList').innerHTML = myLibrary.map(item => {
  return `<div class="book-1">
    <div class="book-1">Title: ${item.title}</div>
    <div class="book-1">Author: ${item.author}</div>
    <div class="book-1">Pages: ${item.pages}</div>
    <div class="book-1">${item.checkbox === true ? "Read" : "Not Read"}</div>
    <button onclick="removeBooks()" class="btn btn-danger">Remove</button>
  </div>`


}).join('')

// If there is no form, we want to display it, otherwise we just don't have the form displayed.
displayForm()
}

// Here I want to make the remove function, the data gets deleted, but not in real time. I need to refresh the page.
function removeBooks() {
  myLibrary = JSON.parse(localStorage.getItem('books'))
  for (var index = 0; index < myLibrary.length; index++) {
  myLibrary.splice(index, 1);
}
localStorage.setItem('books', JSON.stringify(myLibrary))

renderBooks()
}
renderBooks()


function displayForm() {

  var x = document.getElementById("demo");
  if (x.style.display === "none") {
  x.style.display = "block";
  } else {
  x.style.display = "none";
  }

}
