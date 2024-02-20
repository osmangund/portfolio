import PropTypes from "prop-types"
import "./Projects.scss"
import MacWindowEffect from "../../MacWindowEffect/MacWindowEffect"
import { projectContents } from "./projectContents"
import { kebabCase } from "../../../utils/kebabCase"
import { motion } from "framer-motion"

const projectVariants = {
  initial: { opacity: 0 },
  visible: { opacity: 1, y: 0 },
}

function Project({ project: { title, body, tags, color } }) {
  const dashedTitle = kebabCase(title)
  const src = `/images/projects/${dashedTitle}.png`

  return (
    <motion.div
      variants={projectVariants}
      initial="initial"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      className={`project ${dashedTitle}`}
    >
      <div className="project__image">
        <MacWindowEffect />
        <a
          href={`https://osmangund.github.io/${dashedTitle}/`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={src} alt={`${title} project screenshot.`} aria-hidden />
        </a>
      </div>
      <div className="project__content">
        <div className="tags">
          {tags.map((tag, i) => (
            <p key={i} className="tag">
              {tag}
            </p>
          ))}
        </div>
        <h1 className="title">{title}</h1>
        <p className="body">{body}</p>
        <div className="project__links">
          <a
            href={`https://github.com/osmangund/${dashedTitle}`}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-text="Source code"
            data-color={color}
          >
            Source code
          </a>
          <a
            href={`https://osmangund.github.io/${dashedTitle}/`}
            target="_blank"
            rel="noreferrer"
            className="button"
            data-text="Live"
            data-color={color}
          >
            Live
          </a>
        </div>
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
  }),
}
