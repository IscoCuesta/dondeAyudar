import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Dónde Ayudar + {process.env.REACT_APP_DEV_API_URL}
      </a>
      <a className="my-2 my-sm-0" href="/Login">
        Login
      </a>
    </nav>
  );
}

export default Nav;
