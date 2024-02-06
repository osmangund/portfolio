import { GithubLogo } from "../../icons/Github"
import { LinkedinLogo } from "../../icons/Linkedin"
import "./Contact.scss"

export default function Contact() {
  return (
    <section id="contact">
      <div id="contact__info">
        <h1>Let&apos;s connect!</h1>
        <div id="links">
          <a
            href="https://github.com/osmangund/"
            target="_blank"
            rel="noreferrer"
          >
            <GithubLogo />
          </a>
          <a
            href="https://linkedin.com/in/osmangund/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinLogo />
          </a>
        </div>
        <form action="">
          <div className="input">
            <input
              type="text"
              name="name"
              id="name"
              required
              className="input-field"
            />
            <label htmlFor="name">Full name</label>
          </div>
          <div className="input">
            <input
              type="text"
              name="email"
              id="email"
              required
              className="input-field"
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input">
            <textarea
              type="text"
              name="message"
              id="message"
              required
              className="input-field"
            />
            <label htmlFor="message">Hi Osman, I have an idea...</label>
          </div>
          <button>Submit</button>
        </form>
        <p id="brand">
          <b>osmangund</b>® 2024. All rights reserved.
        </p>
      </div>
      <div id="contact__image">
        <img src="imgs/contact.jpg" alt="" />
      </div>
    </section>
  )
}
