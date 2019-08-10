import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import firebase from 'firebase'



class Books extends Component {
  state = {
    email: "",
    name: "",
    password: "",
    User: ""
  };

  componentDidMount() {
    this.loadUser();

    console.log();
  }

  loadUser = () => {
    // const current = firebase.auth().getCurrentUser()

  };

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
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((err)=> console.log(err))
    }

  };
  handleFormSubmitRegister = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {

      (firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).user)
      .then((user) => {
        user.updateProfile({displayName: this.state.name})
      })
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <p>if you are a ONG Login</p>
            </Jumbotron>
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
