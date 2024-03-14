import { Space_Grotesk, Poppins, Manrope } from "next/font/google"
import localFont from "next/font/local"

export const dance = localFont({
  src: "../../public/fonts/Dance.otf",
  variable: "--font-dance",
})

export const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

export const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "700"],
})

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--manrope",
  display: "swap",
})
