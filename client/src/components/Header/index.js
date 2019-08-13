import React from "react";
import "./style.css";

function Header(props) {
  return (
      
    <div className="hero" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default Header;