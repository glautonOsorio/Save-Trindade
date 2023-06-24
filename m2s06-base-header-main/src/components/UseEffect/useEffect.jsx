import React from "react";

const { useEffect, useState } = require("react");

const UseEffectComponent = () => {
  const fruitsArr = ["maçã", "Banana", "Morango", "Tomate"];
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    const ulElement = document.querySelector("#list");
    ulElement.innerHTML = render();
  }, [fruits]);
  const render = () => {
    return (
      <>
        <li>{fruits[0]}</li>
        <li>{fruits[1]}</li>
        <li>{fruits[2]}</li>
        <li>{fruits[3]}</li>
      </>
    );
  };

  const getFruits = () => {
    setFruits(fruitsArr);
  };

  return (
    <>
      <ul id="list"></ul>
      <button onClick={getFruits}>Buscar Fruits</button>
    </>
  );
};

export default UseEffectComponent;
