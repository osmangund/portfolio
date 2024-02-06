import { useEffect } from "react"
import { Bars } from "../../icons/Bars"
import "./Nav.scss"

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
      <div id="logo">OG.</div>
      <input type="checkbox" name="bars-checkbox" id="bars-checkbox" />
      <label htmlFor="bars-checkbox" className="bars-label">
        <Bars className="bars" />
      </label>
      <ul>
        <li>
          <a href="#projects" className="interactable">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="interactable">
            Book Notes
          </a>
        </li>
        <li>
          <a href="#" className="interactable">
            Letters
          </a>
        </li>
        <li>
          <a href="#contact" className="interactable">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
