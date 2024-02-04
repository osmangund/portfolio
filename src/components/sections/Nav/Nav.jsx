import { Bars } from "../../icons/Bars"
import "./Nav.scss"

export default function Nav() {
  return (
    <nav>
      <div id="logo">osmangund</div>
      <input type="checkbox" name="bars-checkbox" id="bars-checkbox" />
      <label htmlFor="bars-checkbox" className="bars-label">
        <Bars className="bars" />
      </label>
      <ul>
        <li>
          <a href="" className="interactable">
            Portfolio
          </a>
        </li>
        <li>
          <a href="" className="interactable">
            Book Notes
          </a>
        </li>
        <li>
          <a href="" className="interactable">
            Articles
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
