import { useEffect } from "react"
import { Bars } from "../icons/Bars"
import "./Nav.scss"
import PropTypes from "prop-types"
import { HashLink, NavHashLink } from "react-router-hash-link"
import { handleNavHashLink, handleNavLink } from "../../utils/links"

const navTitles = [
  { title: "Projects" },
  { title: "Book Notes", hashLink: false },
  { title: "Letters" },
  { title: "Contact" },
]

const NavLink = ({ link: { title, hashLink = true } }) => {
  return hashLink ? (
    <li>
      <NavHashLink to={handleNavHashLink(title)} className="interactable">
        {title}
      </NavHashLink>
    </li>
  ) : (
    <li>
      <HashLink to={handleNavLink(title)} className="interactable">
        {title}
      </HashLink>
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
        {navTitles?.map((link, i) => (
          <NavLink key={i} link={link} />
        ))}
      </ul>
    </nav>
  )
}

NavLink.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    hashLink: PropTypes.bool,
  }).isRequired,
}
