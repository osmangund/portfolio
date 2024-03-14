import "./Form.scss"

export function Input({
  element = "input",
  name,
  label,
  type = "text",
}: InputProps) {
  return (
    <div className="input">
      {element === "input" ? (
        <input
          type={type}
          name={name}
          id={name}
          required
          placeholder=" "
          className="input-field"
        />
      ) : (
        <textarea
          name={name}
          id={name}
          required
          placeholder=" "
          className="input-field"
        />
      )}
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default function Form({
  formRef,
  onSubmit,
  buttonValue,
  children,
}: FormProps) {
  return (
    <form ref={formRef} onSubmit={onSubmit}>
      {children}
      <button>{buttonValue}</button>
    </form>
  )
}

interface InputProps {
  name: string
  label: string
  type?: string
  element?: string
}

interface FormProps {
  formRef?: any
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
  buttonValue?: string
  children?: React.ReactNode
}
