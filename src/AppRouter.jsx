import App from "./App.jsx"
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Books from "./components/pages/BookNotes/Books.jsx"
import Nav from "./components/Nav/Nav.jsx"
import { books } from "./components/pages/BookNotes/bookContents.js"
import Book from "./components/pages/BookNotes/Book/Book.jsx"
import { kebabCase } from "./utils/kebabCase.js"

export default function AppRouter() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/book-notes"
          element={<Books title="Book Summaries | Osman E." />}
        />
        {books.map((book) => {
          return (
            <Route
              key={book.id}
              path={`/book-notes/${kebabCase(book.title)}/`}
              element={<Book book={book} />}
            />
          )
        })}
      </Routes>
    </Router>
  )
}
