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
export function setBookStorage(storageName, bookId) {
  const storageBooks = getBookStorage(storageName);
  // check already exist this book or not
  const ifExists = storageBooks.find((itemId) => itemId == bookId);
  if (!ifExists) {
    storageBooks.push(bookId);
    localStorage.setItem(storageName, JSON.stringify(storageBooks));
  } else {
    return;
    //   or alert
  }
}
