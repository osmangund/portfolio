import { motion } from "framer-motion"
import { ChevronDown } from "../../icons/ChevronDown"
import "./Header.scss"

const scrollIconVariants = {
  start: {
    y: 0,
  },
  end: {
    y: -10,
    transition: {
      repeat: Infinity,
      ease: "easeInOut",
      duration: 0.5,
      delay: 2.5,
      repeatType: "reverse",
    },
  },
}

const headerAnims = {
  start: {
    opacity: 0,
    y: 50,
  },
  end: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 0.6472,
    },
  },
}

export default function Header() {
  return (
    <motion.header
      variants={headerAnims}
      initial="start"
      whileInView="end"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div variants={headerAnims}>
        <motion.h1 variants={headerAnims}>
          Hi, I&apos;m Osman. <span className="interactable">🙋🏽‍♂️</span>
        </motion.h1>
        <motion.h2 variants={headerAnims}>Junior Front End Developer</motion.h2>
        <motion.p variants={headerAnims}>
          I love building and creating on web. Especially with{" "}
          <span className="highlight">React.</span>
        </motion.p>
      </motion.div>
      <motion.div
        variants={scrollIconVariants}
        whileInView="end"
        initial="start"
        id="scroll__icon__wrapper"
        viewport={{ once: true, amount: 0.5 }}
      >
        <ChevronDown id="scroll__icon" />
      </motion.div>
    </motion.header>
  )
}
