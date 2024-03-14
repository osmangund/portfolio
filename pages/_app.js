// pages/_app.js
import PropTypes from "prop-types"

import "@/index.css" // Adjust the path to where your index.css is located
import Nav from "@/components/Nav/Nav"

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
