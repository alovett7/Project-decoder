// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  return accounts.find(account=>account.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((a,b)=>{
    return a.name.last > b.name.last ?1:-1;
  })
}

function getTotalNumberOfBorrows(account, books) {
  const borrowedBooksByThisAccount=books.filter(book=>book["borrows"].some(borrow=>borrow.id===account.id));
  return borrowedBooksByThisAccount.length;
}

function getBooksPossessedByAccount(account, books, authors) { const booksPossessedByThisAccount=books.filter(book => book["borrows"].some(borrow => borrow.id===account.id && borrow.returned===false));
  const addAuthorsToBooks= booksPossessedByThisAccount.map(book => {
    book["author"]=authors.find(author =>author.id===book.authorId);
    return book;
  });
  return addAuthorsToBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
