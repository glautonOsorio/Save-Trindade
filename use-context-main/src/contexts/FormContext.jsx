import PropTypes from "prop-types";
import { createContext, useState } from "react";


export const FormContext = createContext({
  formData: {},
  setFormData: () => {},
});

export const FormProvider = ( { children } ) => {
  const [formData, setFormData] = useState({
    email: 'aluno@senai.com.br',
  });

  return(
    <FormContext.Provider value={{formData, setFormData}}>
      { children }
    </FormContext.Provider>
  )
};

FormProvider.propTypes = {
  children: PropTypes.node,
}