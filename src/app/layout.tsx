import type { Metadata } from "next"
import "@/globals.css"
import { manrope, poppins, space_grotesk } from "@/utils/fonts"

export const metadata: Metadata = {
  title: "Osman Emre Gundogdu",
  description: "Osman Emre Gundogdu | Personal website | Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} ${poppins.variable} ${manrope.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>😈</text></svg>"
        />
      </head>
      <body>
        <div id="root">{children}</div>
        <script type="module" src="/src/main.jsx"></script>
      </body>
    </html>
  )
}
