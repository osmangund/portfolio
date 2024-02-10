import { useEffect } from "react"
import { Bars } from "../icons/Bars"
import "./Nav.scss"
import PropTypes from "prop-types"

const links = [
  { title: "Projects", href: "/#projects" },
  { title: "Book Notes", href: "/#/book-notes" },
  { title: "Letters", href: "#" },
  { title: "Contact", href: "#contact" },
]

const NavLink = ({ title, href }) => {
  return (
    <li>
      <a href={href} className="interactable">
        {title}
      </a>
    </li>
  )
}

export default function Nav() {
  // keep track of previous scroll position
  let prevScrollPos = window.scrollY

  useEffect(() => {
    if (window.scrollY < 10) {
      const nav = document.querySelector("nav")
      nav.classList.add("show")
    }
  }, [])

  window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav")
    const currentScrollPos = window.scrollY

    prevScrollPos > currentScrollPos
      ? nav.classList.add("show")
      : nav.classList.remove("show")

    prevScrollPos = currentScrollPos
  })

  return (
    <nav>
      <a id="logo" href="/">
        OG.
      </a>
      <input type="checkbox" name="bars-checkbox" id="bars-checkbox" />
      <label htmlFor="bars-checkbox" className="bars-label">
        <Bars className="bars" />
      </label>
      <ul>
        {links?.map((link, i) => (
          <NavLink key={i} title={link.title} href={link.href} />
        ))}
      </ul>
    </nav>
  )
}

NavLink.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
}
