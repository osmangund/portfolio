import { GithubLogo } from "../../icons/Github"
import { LinkedinLogo } from "../../icons/Linkedin"
import "./Contact.scss"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import PropTypes from "prop-types"

const InputField = ({ name, label, type = "text" }) => {
  return (
    <div className="input">
      <input
        type={type}
        name={name}
        id={name}
        required
        placeholder=""
        className="input-field"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

const ContactForm = () => {
  const [formsent, setFormSent] = useState(false)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm("service_ezyym3u", "template_nveerrx", form.current, {
        publicKey: "YwULCmPz0-uMpW_yr",
      })
      .then(
        () => {
          e.target.reset()
          setFormSent(true)
        },
        (error) => {
          console.log("FAILED...", error.text)
          setFormSent(false)
        }
      )
  }

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <InputField name="user_name" label="Full name" />
        <InputField name="user_email" label="Email" />
        <InputField name="message" label="Hi Osman, I have an idea..." />
        <button>Submit</button>
      </form>
      <div className="form__info__card">
        {formsent ? (
          <>
            <h1>Success!</h1>
            <p>
              You have successfully sent your message. I&apos;ll try to reply
              back in 24 hours.
            </p>
          </>
        ) : (
          <>
            <h1>Oh...</h1>
            <p>
              There was a problem sending your message. Please try again later.
            </p>
          </>
        )}
      </div>
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

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}
