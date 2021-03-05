// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => {
    return !book.borrows[0].returned;
  }).length;
}

function getMostCommonGenres(books) {
  let result = [];
  let genre = [];
  books.forEach((book) => {
    if (!genre.includes(book.genre)) {
      genre.push(book.genre);
      result.push({ name: book.genre, count: 1 });
    } else {
      const genreObject = result.find((genre) => genre.name === book.genre);
      genreObject.count++;
    }
  });
  result.sort((a, b) => b.count - a.count);
  return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  return books
    .map((book) => {
      return {
        name: book.title,
        count: book.borrows.length,
      };
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let map = {};
  books.forEach((book) => {
    let author = authors.find((author) => author.id === book.authorId);
    let name = `${author.name.first} ${author.name.last}`;
    if (map[name]) {
      map[name] += book.borrows.length;
    } else {
      map[name] = book.borrows.length;
    }
  });
  return Object.entries(map)
    .map(([name, count]) => {
      return {name, count}
    })
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
