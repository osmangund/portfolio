import { GithubLogo } from "../../icons/Github"
import { LinkedinLogo } from "../../icons/Linkedin"
import "./Contact.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { Input } from "../../Input/Form"
import Form from "../../Input/Form"

const sendSuccessMessage = () => {
  return toast.success(
    "You have sent your message successfully! I'll reply back as soon as possible.",
    {
      duration: 3000,
      style: {
        border: "1px solid green",
        padding: "16px",
        fontSize: "1.5rem",
      },
      iconTheme: {
        primary: "green",
        secondary: "#FFFAEE",
      },
    }
  )
}

const sendErrorMessage = () => {
  return toast.error("Failed to send your message. Please try again later.", {
    duration: 3000,
    style: {
      padding: "16px",
      fontSize: "1.5rem",
    },
    iconTheme: {
      primary: "red",
      secondary: "#FFFAEE",
    },
  })
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
          sendSuccessMessage()
        },
        () => {
          sendErrorMessage()
        }
      )
  }

  return (
    <>
      <Form formRef={form} onSubmit={sendEmail} buttonValue="Submit">
        <Input name="user_name" label="Full name" />
        <Input name="user_email" label="Email" type="email" />
        <Input
          element="textarea"
          name="message"
          label="Hi Osman, I have an idea..."
        />
      </Form>
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
          <span className="highlight">osmangund</span>® 2024. All rights
          reserved.
        </p>
      </div>
      <div id="contact__image">
        <img
          src="images/contact.jpg"
          alt="Chair, laptop, table and images on the wall. Two people work vibes atmosphere."
        />
      </div>
      <Toaster position="top-right" />
    </section>
  )
}
