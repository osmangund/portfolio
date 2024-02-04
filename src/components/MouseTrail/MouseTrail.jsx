import { useEffect } from "react"
import "./MouseTrail.scss"

const animateTrailer = (mousetrail, e) => {
  const { clientX, clientY } = e
  mousetrail.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3500, fill: "forwards" }
  )
}

export default function MouseTrail() {
  useEffect(() => {
    const mousetrail = document.getElementById("mouse-trail")
    document.body.addEventListener("mouseover", (e) => {
      animateTrailer(mousetrail, e)
    })
  }, [])

  return (
    <div id="mouse-trail-wrapper">
      <div id="mouse-trail" />
      <div id="blur"></div>
    </div>
  )
}
