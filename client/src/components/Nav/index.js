import React, { Component } from "react";
import firebase from 'firebase'

import logoIcon from "../../DA-icon.svg";
import { FormBtn } from "../Form";
import API from "../../utils/API";


const navText1 = {
  color: "#D7F205",
  margin: "1rem",
};

const nav = {
  width: "100%"
};


class Books extends Component {
  state = {
    orgId: null,
    Org: {},
    logged: false
  };


  componentWillMount(){
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        localStorage.setItem("DAU", user.uid)
        this.setState({
          firebaseUID: localStorage.getItem("DAU"),
          logged: true
        });
      } else {
        // No user is signed in.
        // this.props.history.push("/Login");
      }
    });



  };

  componentDidMount() {
    // const user = firebase.auth().currentUser
    // console.log(user.uid);

    this.loadUser();
  }



  loadUser() {
    API.getOrgUid({
      userId: this.state.firebaseUID
    }).then((res) =>{
      this.setState({
        Org: res.data
      })
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
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      localStorage.setItem("DAU", null);
    }).catch(function(error) {
      // An error happened.
    }).finally(() => {
      // this.props.history.push("/");
    })
  }


  render () {
  return (
    <nav className="navbar navbar-expand-lg" style={nav}>
      <a className="navbar-brand" href="/">
        <img src={logoIcon}  width="50px" height="50px"></img>
      </a>
{/*       <a className="my-2 my-sm-0" href="/Login" style={navText2}>
        Incia sesión o regístrate
      </a> */}
      { this.state.Org._id ?
        <a className="my-2 my-sm-0" href={"/ONG/"+this.state.Org._id} style={navText1}>
        {this.state.Org.nombre}
        </a>
      :
        <a className="my-2 my-sm-0" href="/Login" style={navText1}>
        Incia sesión o regístrate    
        </a>
      }
      {this.state.logged ?

        <FormBtn
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
