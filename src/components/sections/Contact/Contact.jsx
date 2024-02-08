import { GithubLogo } from "../../icons/Github"
import { LinkedinLogo } from "../../icons/Linkedin"
import "./Contact.scss"
import { useEffect, useRef, useState } from "react"
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
          setFormSent("success")
        },
        (error) => {
          console.log("FAILED...", error.text)
          setFormSent("fail")
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
    </>
  )
}

export default function Contact() {
  const [formsent, setFormSent] = useState(null)
  const FormSuccess = () => {
    useEffect(() => {
      setTimeout(() => {
        setFormSent(null)
      }, 3000)
    })
    return (
      <div className="form__info__card">
        <p>Thanks for reaching out! I&apos;ll get back to you soon.</p>
      </div>
    )
  }

  const FormFail = () => {
    useEffect(() => {
      setTimeout(() => {
        setFormSent(null)
      }, 3000)
    })
    return (
      <div className="form__info__card">
        <p>Oops! Something went wrong. Please try again later.</p>
      </div>
    )
  }

  const InfoCard = () => {
    if (formsent === "success") return <FormSuccess />
    if (formsent === "fail") return <FormFail />
  }
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
      <InfoCard />
      <FormSuccess />
    </section>
  )
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
}
