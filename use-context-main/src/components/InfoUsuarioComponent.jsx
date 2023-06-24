import { useContext } from "react"
import { FormContext } from "../contexts/FormContext";

const InfoUsuarioComponent = () => {
  const { formData } = useContext(FormContext);

  return (
    <>
      <p>{ formData.email }</p>
    </>
  )
}

export default InfoUsuarioComponent
