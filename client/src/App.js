import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import PostDetail from "./pages/PostDetail";
import ONGDetail from "./pages/ONGDetail";
import ONG from "./pages/ONG";
import ONGPost from "./pages/ONGPost";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/sogin" component={Login} />
          <Route exact path="/segister" component={Register} />
          <Route exact path="/ong" component={ONG} />
          <Route exact path="/ong/newpost" component={ONGPost} />
          <Route exact path="/ong/:id" component={ONGDetail} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
