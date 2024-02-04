import MouseTrail from "./components/MouseTrail/MouseTrail"
import Contact from "./components/sections/Contact/Contact"
import Header from "./components/sections/Header/Header"
import Nav from "./components/sections/Nav/Nav"
import Projects from "./components/sections/Projects/Projects"

export default function App() {
  return (
    <>
      <Nav />
      <MouseTrail />
      <Header />
      <Projects />
      <Contact />
    </>
  )
}
