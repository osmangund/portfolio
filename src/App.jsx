import MouseTrailer from "./components/MouseTrailer/MouseTrailer"
import Nav from "./components/Nav/Nav"
import Contact from "./components/sections/Contact/Contact"
import Header from "./components/sections/Header/Header"
import Projects from "./components/sections/Projects/Projects"

export default function App() {
  return (
    <>
      <Nav />
      <MouseTrailer />
      <Header />
      <Projects />
      <Contact />
    </>
  )
}
