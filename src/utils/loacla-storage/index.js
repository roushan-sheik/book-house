// get books form localStorage
export function getBookStorage(storageName) {
  let books = [];
  const storeBooks = localStorage.getItem(storageName);
  if (storeBooks) {
    books = JSON.parse(storeBooks);
  }
  return books;
}
// set book to localStorage
export function setBookStorage(storageName, book) {
  const storageBooks = getBookStorage();
  // check already exist this book or not
  const ifExists = storageBooks.find((item) => item.id == book.id);
  if (!ifExists) {
    storageBooks.push(book);
    localStorage.setItem(storageName, JSON.stringify(storageBooks));
  } else {
    return;
    //   or alert
  }
}
