import React, { Component } from "react";
import firebase from 'firebase'
import "./style.css";

import logoIcon from "../../DA-icon.svg";
import { FormBtn } from "../Form";
import API from "../../utils/API";

const nav = {
  width: "100%"
};


class Books extends Component {
  state = {
    orgId: null,
    orgName: "",
    Org: {},
    logged: false
  };


  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in. console.log exposes API key
        //console.log(user)
        localStorage.setItem("DAU", user.uid)
        this.setState({
          firebaseUID: localStorage.getItem("DAU"),
          logged: true
        }, () => this.loadUser());

      } else {
        // No user is signed in.
        // this.props.history.push("/Login");
      }
    });



  };

  componentDidMount() {
    // const user = firebase.auth().currentUser
    // console.log(user.uid);


  }



  loadUser() {
    API.getOrgUid({
      userId: this.state.firebaseUID
    }).then((res) =>{
      console.log(res)
      if(res.data !== null){
        this.setState({
          Org: res.data,
          orgName: res.data.nombre
        }, () => console.log(this.state))
      }
    })
    // .then(() => {
    //   if(OrgID){
    //     this.props.history.push("/ONG/"+OrgID)
    //   }
    // })
    .catch((err) => console.log(err));
  };

  logOut() {
    console.log("logOut")
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      localStorage.setItem("DAU", null);
      //setTimeout(() => { this.props.history.push("/") }, 3000)
    }).catch(function(error) {
      // An error happened.
      console.log(error)
    })
  };


  render () {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/Search">
        <img src={logoIcon}  width="50px" height="50px"></img>
      </a>
      { this.state.logged ?
        <a className="org-name" href={this.state.Org !== {} ? "/ONG/"+this.state.Org._id : "/ONG"}>
        {this.state.Org.nombre? this.state.Org.nombre : "DóndeAyudar" }
        </a>
      :
        <a className="org-name" href="/Login">
        Inicia sesión o regístrate    
        </a>
      }
      {this.state.logged ?
        <button className="btn btn-outline-primary logout-btn" onClick={this.logOut}>Log out</button> : ''
      }

    </nav>
  );
  }
}

export default Books;
