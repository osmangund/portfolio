import { ShareLink } from "@/components/icons/ShareLink"
import "./Book.scss"
import propTypes from "prop-types"

export default function Book({
  book: { title, impressions, actionableSteps, quotes, date },
}) {
  return (
    <section className="book-section">
      <article className="book">
        <h4 className="book-date">{date}</h4>
        <h1 className="book-title">{title}</h1>
        <p className="book-impressions">{impressions}</p>

        <h3>Actionable steps:</h3>
        <ul className="actionable-steps">
          {actionableSteps?.map((step, index) => (
            <li key={index} className="actionable-step">
              {step}
            </li>
          ))}
        </ul>
        <h3>Some quotes that I liked:</h3>
        <ul className="quotes">
          {quotes?.map((quote, index) => (
            <li key={index} className="quote">
              {`"${quote}"`}
            </li>
          ))}
        </ul>
        <div className="seperator" />
        <div className="share-links">
          <ShareLink className="share-link icon" />
        </div>
      </article>
    </section>
  )
}

Book.propTypes = {
  book: propTypes.shape({
    title: propTypes.string,
    impressions: propTypes.string,
    actionableSteps: propTypes.arrayOf(propTypes.string),
    quotes: propTypes.arrayOf(propTypes.string),
    date: propTypes.string,
  }),
}
