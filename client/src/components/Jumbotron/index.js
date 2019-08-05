import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center", fontFamily: 'Beth Ellen, cursive' }}
      className="jumbotron text"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
