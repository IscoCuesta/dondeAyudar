import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import ONGDetail from "./pages/ONGDetail";
import ONG from "./pages/ONG";
import ONGEvent from "./pages/ONGEvent";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/ONG" component={ONG} />
          <Route exact path="/ONG/newEvent" component={ONGEvent} />
          <Route exact path="/ONG/:id" component={ONGDetail} />
          <Route exact path="/Event/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
