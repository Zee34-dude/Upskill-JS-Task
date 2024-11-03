let library = []

function addBook(name, author, year, summaryText) {

  library.push({
    name: name,
    author: author,
    year: year,
    getSummary: function () {
      return `${summaryText}. Written by ${author}`
    },

  })


  const viewer = library.map((book, index) => {
    return book.getSummary()
  })
  console.log(viewer);
  const viewNAames = library.map((book, index) => {
    return book.name
  })
  
  return library
}

function deleteBook(bookNo) {
  library.splice(bookNo, 1)
  return library
}



addBook("Letting Go", "Philip Roth", 1962, "A story about two jewish friends navigating morality,identity and adulthood")

addBook("Gone", "John Doe", 1956, "This book talks a missing person")
console.log(addBook("Tom Soyer", "Mark Twain", 1876, "Mischievous Tom sawyer navigates childhood in a small American town"))
console.log(deleteBook(1))


