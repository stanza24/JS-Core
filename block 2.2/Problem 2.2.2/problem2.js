function Book(name, author, year) {
  this.author = author;
  this.name = name;
  this.reader = null;
  this.year = year;
}

// доступна ли книга для выдачи или она у кого-то на руках
Book.prototype.isAvailable = function () {
  if (this.reader === null) {
    return true;
  } else {
    return false;
  }
};
//  должен выдавать книгу читателю, если она доступна для выдачи и записывать его имя в reader, возвращает true, если выдача книги возможна и она произведена, false, если книга уже выдана
Book.prototype.takeBook = function (readerName) {
  if (this.isAvailable() === true) {
    this.reader = readerName;
    return true;
  } else {
    return false;
  }
};
// регистрирует возврат книги, устанавливает reader в null, возвращает true, если книга была на руках, false если книга итак в библиотеке
Book.prototype.returnBook = function () {
  if (this.reader !== null) {
    this.reader = null;
    return true;
  } else {
    return false;
  }
};
// изменяет название книги на newBookName, возвращает true/false, в зависимости от результата
Book.prototype.changeBookName = function changeBookName(newBookName) {
  this.name = newBookName;
  return true;
};
// изменяет имя автора на newAuthorName, возвращает true/false в зависимости от результата
Book.prototype.changeAuthorName = function (newAuthorName) {
  this.author = newAuthorName;
  if (this.author == newAuthorName) {
    return true;
  } else {
    return false;
  }
};

// возвращает имя текущего читателя или null, если книга доступна для выдачи
Book.prototype.getCurrentReader = function () {
  if (this.isAvailable() === false) {
    return this.reader;
  } else {
    return null;
  }
};

export { Book };
