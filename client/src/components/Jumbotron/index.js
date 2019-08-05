import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 250, clear: "both", paddingTop: 120, textAlign: "center", fontFamily: 'Beth Ellen, cursive' }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
