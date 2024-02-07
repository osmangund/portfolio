import { GithubLogo } from "../../icons/Github"
import { LinkedinLogo } from "../../icons/Linkedin"
import "./Contact.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"

function ContactForm() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_ezyym3u", "template_nveerrx", form.current, {
        publicKey: "j2SKL1A1mLoqZEVlf",
      })
      .then(
        () => {
          console.log("SUCCESS!")
        },
        (error) => {
          console.log("FAILED...", error.text)
        }
      )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div className="input">
          <input
            type="text"
            name="user_name"
            id="user_name"
            required
            className="input-field"
          />
          <label htmlFor="user_name">Full name</label>
        </div>
        <div className="input">
          <input
            type="text"
            name="user_email"
            id="user_email"
            required
            className="input-field"
          />
          <label htmlFor="user_email">Email</label>
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
    </>
  )
}

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
        <ContactForm />
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
