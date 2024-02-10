import "./Books.scss"
import PropTypes from "prop-types"
import { books } from "./bookContents"
import { useEffect } from "react"
import { titleToDashed } from "../../../utils/titleToDashed"

function BookCard({ book: { title, author } }) {
  return (
    <article className="book-card">
      <div className="book__image">
        <a href={`/book-notes/${titleToDashed(title)}/`}>
          <img
            src={`/images/books/${titleToDashed(title)}.jpg`}
            alt=""
            aria-hidden
          />
        </a>
      </div>
      <div className="book__content">
        <h1 className="book__title">{title}</h1>
        <h2 className="book__author">{author}</h2>
      </div>
    </article>
  )
}

export default function BookNotes(props) {
  useEffect(() => {
    document.title = props.title
  }, [])
  return (
    <>
      <section id="book-notes">
        <div id="book-notes__info">
          <div className="container">
            <div>
              <h1>📚 Book summaries</h1>
              <p>
                If you like books, this is for you. Join the OG Letter and
                I&apos;ll send you on books about psychology, science,
                marketing, sales.
              </p>
            </div>

            <form action="">
              <input type="email" name="email" id="email" placeholder="" />
              <label htmlFor="email">Your email</label>
              <button>Join</button>
            </form>
          </div>
          <div className="container"></div>
        </div>
        <div id="books">
          {books.map((book) => {
            return <BookCard key={book.id} book={book} />
          })}
        </div>
      </section>
    </>
  )
}

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
}

BookNotes.propTypes = {
  title: PropTypes.string,
}
