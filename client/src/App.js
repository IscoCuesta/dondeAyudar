import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import PostDetail from "./pages/PostDetail";
import ONGDetail from "./pages/ONGDetail";
import ONGPost from "./pages/ONGPost";
import ONGEdit from "./pages/ONGEdit";
import NoMatch from "./pages/NoMatch";
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/ong/newpost" component={ONGPost} />
          <Route exact path="/ong/edit/:id" component={ONGEdit} />
          <Route exact path="/ong/:id" component={ONGDetail} />
          <Route exact path="/posts/:id" component={PostDetail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
