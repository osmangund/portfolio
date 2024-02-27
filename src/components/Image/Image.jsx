import PropTypes from "prop-types"
import "./Image.scss"
import { useEffect } from "react"

export default function Image({ src, alt, ariaHidden = false }) {
  let blurLoadImg = src.replace(/\.jpg$/, "-small.jpg")

  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load")
    blurDivs.forEach((div) => {
      const img = div.querySelector("img")
      function loaded() {
        div.classList.add("loaded")
      }
      if (img.complete) {
        loaded()
      } else {
        img.addEventListener("load", loaded)
      }
    })
  })

  return (
    <div
      className="blur-load"
      style={{ backgroundImage: `url(${blurLoadImg})` }}
    >
      <img src={src} alt={alt} aria-hidden={ariaHidden} loading="lazy" />
    </div>
  )
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  ariaHidden: PropTypes.bool,
}
