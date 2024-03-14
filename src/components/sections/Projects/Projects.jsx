import PropTypes from "prop-types"
import "./Projects.scss"
import MacWindowEffect from "@/components/MacWindowEffect/MacWindowEffect"
import { projectContents } from "@/../content/projectContents"
import { kebabCase } from "@/utils/kebabCase"
import { motion } from "framer-motion"
import { projectImgLink } from "@/utils/links"
import Image from "@/components/Image/Image"

const projectVariants = {
  initial: { opacity: 0, y: 100 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut", staggerChildren: 0.1618 },
  },
}

function Project({
  project: { title, body, tags, color, liveGhPages = true, liveLink },
}) {
  const src = projectImgLink(title)
  const liveHref = liveGhPages
    ? `https://osmangund.github.io/${kebabCase(title)}`
    : liveLink
  return (
    <motion.div
      variants={projectVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ amount: 0.5, once: true }}
      className={`project ${kebabCase(title)}`}
    >
      <div className="project__image">
        <MacWindowEffect />
        <a href={liveHref} target="_blank" rel="noreferrer">
          <Image
            src={src}
            alt={`${title} project screenshot.`}
            ariaHidden={true}
            fill={true}
          />
        </a>
      </div>
      <div className="project__content">
        <motion.div className="tags" variants={projectVariants}>
          {tags.map((tag, i) => (
            <p key={i} className="tag">
              {tag}
            </p>
          ))}
        </motion.div>
        <motion.h1 className="title" variants={projectVariants}>
          {title}
        </motion.h1>
        <motion.p className="body" variants={projectVariants}>
          {body}
        </motion.p>
        <motion.div className="project__links" variants={projectVariants}>
          <a
            href={`https://github.com/osmangund/${kebabCase(title)}`}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-text="Source code"
            data-color={color}
          >
            Source code
          </a>
          <a
            href={liveHref}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-text="Live"
            data-color={color}
          >
            Live
          </a>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      {projectContents.map((project, i) => (
        <Project key={i} project={project} />
      ))}
    </section>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    color: PropTypes.string,
    liveGhPages: PropTypes.bool,
    liveLink: PropTypes.string,
  }),
}
