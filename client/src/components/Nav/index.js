import React, { Component } from "react";
import firebase from 'firebase'

import logoIcon from "../../DA-icon.svg";
import { FormBtn } from "../Form";
import API from "../../utils/API";


const navText1 = {
  color: "#D7F205",
  margin: "1rem",
};

const LogOutBtn = {
margin: "10px 10px 10px auto !important"
};

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
        // User is signed in.
        console.log(user)
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
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand" href="/Search">
        <img src={logoIcon}  width="50px" height="50px"></img>
      </a>
{/*       <a className="my-2 my-sm-0" href="/Login" style={navText2}>
        Incia sesión o regístrate
      </a> */}
      { this.state.logged ?
        <a className="my-2 my-sm-0" href={this.state.Org !== {} ? "/ONG/"+this.state.Org._id : "/ONG"} style={navText1}>
        {this.state.Org.nombre? this.state.Org.nombre : "DóndeAyudar" }
        </a>
      :
        <a className="my-2 my-sm-0" href="/Login" style={navText1}>
        Inicia sesión o regístrate    
        </a>
      }
      {this.state.logged ?

        <FormBtn
        style={{ margin: "10px 10px 10px auto"}}
        onClick={this.logOut}>
          LogOut
        </FormBtn>
        :
        ''
      }

    </nav>
  );
  }
}

export default Books;
