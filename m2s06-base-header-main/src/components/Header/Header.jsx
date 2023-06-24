import React, { useState } from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const logoDefault = useState("Logo Default");
  const [logo, setLogo] = useState(logoDefault);
  useEffect(() => {
    window.document.title = logo;
  }, [logo]);

  const renderMenuItem = (menuItem) => {
    return (
      <li key={menuItem.id}>
        <a href={menuItem.path}>{menuItem.label}</a>
      </li>
    );
  };

  const emptyMenu = () => {
    return <p>Nenhum item a ser exibido</p>;
  };

  const handleButton = () => {
    const value = logo === logoDefault ? "Robert Garcia" : logoDefault;
    setLogo(value);
  };

  return (
    <nav className="menu-principal-wrapper">
      <div className="logo-wrapper">
        <h1>{logo}</h1>
        <button onClick={handleButton}>Trocar nome da Logo</button>
      </div>
      <ul className="menu-wrapper">
        {props.menu.length > 0 ? props.menu.map(renderMenuItem) : emptyMenu()}
      </ul>
    </nav>
  );
};

Header.propTypes = {
  menu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ),
};

export default Header;
