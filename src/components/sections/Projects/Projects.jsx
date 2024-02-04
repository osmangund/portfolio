import PropTypes from "prop-types"
import "./Projects.scss"
import MacWindowEffect from "../../MacWindowEffect/MacWindowEffect"
import { projectContents } from "./projectContents"

function Project({ project: { title, body, tags } }) {
  let titleToDashed = title.toLowerCase().split(" ").join("-")
  const src = `/imgs/${titleToDashed}.png`

  return (
    <div className="project">
      <div className="project__image">
        <MacWindowEffect />
        <a
          href={`https://osmangund.github.io/${titleToDashed}/`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={src} alt="" />
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
            href={`https://github.com/osmangund/${titleToDashed}`}
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            GitHub
          </a>
          <a
            href={`https://osmangund.github.io/${titleToDashed}/`}
            target="_blank"
            rel="noreferrer"
            className="button"
          >
            Live
          </a>
        </div>
      </div>
    </div>
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
  }),
}
