import { useState } from "react";

const FormComponent = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInput = (event) => {
    event.preventDefault();
    const { value, id } = event.target;

    const newData = { ...formData, [id]: value };
    setFormData(newData);
    //console.log(formData);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(isFormValid());
    // ? alert(`${formData.email} logado com sucesso`)
    //  : alert(`Verifique os campos`);
  };

  const isFormValid = () => {
    let validate = true;

    const data = Object.entries(formData);

    for (const [key] of data) {
      if (!formData[key].length) {
        validate = false;
      }
    }

    return validate;
  };

  return (
    <form className="formContainer" onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        placeholder="Digite o seu e-mail"
        onInput={handleInput}
      />

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Digite a sua senha"
        onInput={handleInput}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormComponent;
