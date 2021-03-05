// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  // return books.find(book => book.id === id)
  for (let i = 0; i < books.length; i++) {
    if (books[i].id === id) {
      return books[i];
    }
  }
}

function partitionBooksByBorrowedStatus(books) {
  // const bookR = books.filter((book) => book.borrows[0].returned);
  // const bookB = books.filter((book) => !book.borrows[0].returned);
  // return [bookR, bookB]
  const partitionedBooks = [[], []];
  partitionedBooks[1] = books.filter((book) => book.borrows[0].returned);
  partitionedBooks[0] = books.filter((book) => !book.borrows[0].returned);
  return partitionedBooks;
}

function getBorrowersForBook(book, accounts) {
  const bookBorrowersWithAcountInfo = book.borrows.map((eachTransaction) => {
    const accountInfo = accounts.find(
      (account) => account.id === eachTransaction.id
    );
    const newTransaction = { ...eachTransaction, ...accountInfo };
    return newTransaction;
  });
  return bookBorrowersWithAcountInfo.slice(0, 10);
  // const borrowedBooksByThisAccount=book.filter((book=>book["borrows" === true]).some(borrow=>borrow.id===account.id))
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
