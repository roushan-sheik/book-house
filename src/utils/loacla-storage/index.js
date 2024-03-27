// get books form localStorage
export function getBookStorage() {
  const books = localStorage.getItem("book-store") || [];
  return JSON.parse(books);
}
// set book to localStorage
export function setBookStorage(book) {
  const storageBooks = getBookStorage();
  // check already exist this book or not
  const ifExists = storageBooks.find((item) => item.id == book.id);
  if (!ifExists) {
    storageBooks.push(book);
    localStorage.setItem("book-store", JSON.stringify(storageBooks));
  } else {
    return;
    //   or alert
  }
}
