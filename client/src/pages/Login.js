import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import Toast from "../components/Toast";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import firebase from 'firebase'
import { userInfo } from "os";
import $ from 'jquery';



class Books extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    UserEmail: "",
    UserFirebaseId: "",
    error: "",
    isError: false
  };

  componentDidMount() {
    // this.loadUser();

    // console.log();
    // $('.toast').toast("hide")
  }

  loadUser = () => {
    // const current = firebase.default.auth().getCurrentUser();
    // console.log(current);

  };

  toast = (error) => {
    $('.toast').toast("show");
  }

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        localStorage.setItem("DAU", user.user.uid);
        this.props.history.push("/Register");
      })
      .catch((err)=> this.setState({error: err.message, isError: true}))
    }

  };
  handleFormSubmitRegister = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.setState({
          UserEmail: user.user.email,
          UserFirebaseId: user.user.uid,
        })
      }).then(() => { API.saveUser({
        email: this.state.UserEmail,
        userFirebaseId: this.state.UserFirebaseId,
        nombre: this.state.name
      });
      this.props.history.push("/Register")
    }
      ).catch(err => 
        {this.setState({error: err.message, isError: true})
        this.toast(this.state.error);
        })
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {this.state.isError?
          <Toast
            alert={this.state.error}>
          </Toast>
          : ""}
          <Col size="md-12">
            <Jumbotron>
              <p>if you are a ONG Login</p>
            </Jumbotron>
            <div><h1>{this.state.error}</h1></div>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="nombre"
              />
              <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="email"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="PassWord"
              />
                <FormBtn
                  onClick={this.handleFormSubmit}>
                  Log in
                </FormBtn>
                <FormBtn
                  onClick={this.handleFormSubmitRegister}>
                  Register
                </FormBtn>

            </form>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
