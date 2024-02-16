import "./Input.scss"
import PropTypes from "prop-types"

export default function Input({
  element = "input",
  name,
  label,
  type = "text",
}) {
  return (
    <div className="input">
      {element === "input" ? (
        <input
          type={type}
          name={name}
          id={name}
          required
          placeholder=" "
          maxLength="40"
          className="input-field"
        />
      ) : (
        <textarea
          name={name}
          id={name}
          required
          placeholder=" "
          maxLength="400"
          className="input-field"
        />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  element: PropTypes.string,
}
