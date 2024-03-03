import { GithubLogo } from "../../icons/Github"
import { LinkedinLogo } from "../../icons/Linkedin"
import "./Contact.scss"
import { useRef } from "react"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { Input } from "../../Input/Form"
import Form from "../../Input/Form"
import Image from "../../Image/Image"
import { motion } from "framer-motion"

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

const contactVariants = {
  initial: { y: 100, opacity: 0 },
  whileInView: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.3236 },
  },
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
    <motion.section
      id="contact"
      variants={contactVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div id="contact__info">
        <motion.h1 variants={contactVariants}>Let&apos;s connect!</motion.h1>
        <motion.div id="links" variants={contactVariants}>
          <a
            href="https://github.com/osmangund/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={contactVariants}>
              <GithubLogo />
            </motion.div>
          </a>
          <a
            href="https://linkedin.com/in/osmangund/"
            target="_blank"
            rel="noreferrer"
          >
            <motion.div variants={contactVariants}>
              <LinkedinLogo />
            </motion.div>
          </a>
        </motion.div>
        <motion.div variants={contactVariants}>
          <ContactForm />
        </motion.div>
        <motion.p id="brand" variants={contactVariants}>
          <span className="highlight">osmangund</span>® 2024. All rights
          reserved.
        </motion.p>
      </div>
      <div id="contact__image">
        <Image
          alt="Chair, laptop, table and images on the wall. Two people work vibes atmosphere."
          src="images/contact.jpg"
        />
      </div>
      <Toaster position="top-right" />
    </motion.section>
  )
}
