import "./Form.scss"
import PropTypes from "prop-types"

export function Input({ element = "input", name, label, type = "text" }) {
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

export default function Form({ formRef, onSubmit, buttonValue, children }) {
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {children}
      <button>{buttonValue}</button>
    </form>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  element: PropTypes.string,
}

Form.propTypes = {
  formRef: PropTypes.object,
  onSubmit: PropTypes.func,
  buttonValue: PropTypes.string,
  children: PropTypes.node,
}
