import { Html, Head, Main, NextScript } from "next/document"
import { manrope, poppins, space_grotesk } from "@/utils/fonts"
export default function Document() {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${space_grotesk.style.fontFamily};
        }
      `}</style>
      <Html
        lang="en"
        className={`${space_grotesk.variable} ${poppins.variable} ${manrope.variable}`}
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}
