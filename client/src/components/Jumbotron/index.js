import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron text"
      >
        <p className="parrafoLogin">Si eres parte de una Fundacion te invitamos a registrarte</p>
        {/* <p>En caso de ya tener una cuenta inicia sesion</p> */}
      {children}
    </div>
  );
}

export default Jumbotron;
