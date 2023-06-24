import { useContext, useRef } from "react"
import { FormContext } from "../contexts/FormContext"

const FormComponent = () => {

  const { formData, setFormData } = useContext(FormContext);
  const dataRef = useRef(formData);

  const handleInput = (event) => {
    event.preventDefault();
    const {value} = event.target;

    dataRef.current = value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData({email: dataRef.current});
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" id="email" placeholder="Digite..." onChange={handleInput}/>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default FormComponent
