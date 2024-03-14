"use client"
import "./Image.scss"
import { useEffect } from "react"
import Image from "next/image"

type ImageProps = {
  src: string
  alt: string
  ariaHidden?: boolean
}

export default function MyImage({ src, alt, ariaHidden = false }: ImageProps) {
  let blurLoadImg = src.replace(/\.jpg$/, "-small.jpg")

  useEffect(() => {
    const blurDivs = document.querySelectorAll(".blur-load")
    blurDivs.forEach((div) => {
      const img = div.querySelector("img")
      function loaded() {
        div.classList.add("loaded")
      }
      if (img?.complete) {
        loaded()
      } else {
        img?.addEventListener("load", loaded)
      }
    })
  })

  return (
    <div
      className="blur-load"
      style={{ backgroundImage: `url(${blurLoadImg})` }}
    >
      <Image src={src} alt={alt} aria-hidden={ariaHidden} loading="lazy" fill />
    </div>
  )
}
