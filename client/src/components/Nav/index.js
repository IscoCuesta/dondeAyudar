import React from "react";
import logoIcon from "../../DA-icon.svg";

const navText1 = {
  color: "#D7F205",
  margin: "1rem",
};

const navText2 = {
  color: "#23D9B7",
};


function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/">
        <img src={logoIcon}  width="50px" height="50px"></img>
      </a>
      <a className="my-2 my-sm-0" href="/Registro" style={navText1}>
        Registrate     
      </a>
      
      <a className="my-2 my-sm-0" href="/Login" style={navText2}>
        Incio sesión
      </a>
    </nav>
  );
}

export default Nav;
